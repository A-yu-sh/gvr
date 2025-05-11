import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const base64Key = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64;
    if (!base64Key) {
      throw new Error("Service account key not found in environment variables");
    }

    const rawKey = Buffer.from(base64Key, "base64").toString("utf8");
    const credentials = JSON.parse(rawKey);

    if (!credentials.client_email || !credentials.private_key) {
      throw new Error("Invalid service account credentials");
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1RHNN4dL5Bl7ASLMh68-pkC1tfD3_hI6UCmewHS4ejno";
    const range = "Sheet1!A2:E";

    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    return NextResponse.json({ data: res.data.values || [] });
  } catch (err) {
    console.error("Error fetching sheet data:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
