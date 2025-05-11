import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    // Get and decode the base64 service account key
    const base64Key = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64;
    if (!base64Key) {
      throw new Error("Service account key not found in environment variables");
    }

    const rawKey = Buffer.from(base64Key, "base64").toString("utf8");
    const credentials = JSON.parse(rawKey);

    // Validate required fields
    if (!credentials.client_email || !credentials.private_key) {
      throw new Error("Invalid service account credentials");
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = process.env.PUBLIC_SPREADSHEET_ID;
    const range = "Sheet1!A2:E";

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            body.firstName,
            body.lastName,
            body.email,
            body.phone,
            body.comment || "",
          ],
        ],
      },
    });

    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (err) {
    console.error("Error submitting data:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
