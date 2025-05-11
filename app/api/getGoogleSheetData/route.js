import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const base64Key = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64;
    if (!base64Key) {
      throw new Error(
        "Missing GOOGLE_SERVICE_ACCOUNT_BASE64 environment variable"
      );
    }

    const credentials = JSON.parse(
      Buffer.from(base64Key, "base64").toString("utf-8")
    );

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = process.env.PUBLIC_SPREADSHEET_ID;
    const range = "Sheet1!A2:E";

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;

    return NextResponse.json(rows && rows.length ? rows : []);
  } catch (error) {
    console.error("Error fetching sheet data:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch data from Google Sheets" },
      { status: 500 }
    );
  }
}
