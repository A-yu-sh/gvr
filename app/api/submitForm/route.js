import { google } from "googleapis";
import { NextResponse } from "next/server";

import path from "path";
import fs from "fs";

// Move heavy work to this async function
async function processFormData(body) {
  try {
    const base64Key = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64;
    const keyJson = JSON.parse(
      Buffer.from(base64Key, "base64").toString("utf-8")
    );

    const auth = new google.auth.GoogleAuth({
      credentials: keyJson,
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
  } catch (err) {
    console.error("Error processing form data:", err);
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    // Start processing but don't wait for it to finish
    processFormData(body);

    // Respond immediately
    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (err) {
    console.error("Error submitting form:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
