// app/api/submitForm/route.js
import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const base64Key = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64;
    if (!base64Key) {
      throw new Error("Missing service account env var");
    }

    const rawKey = Buffer.from(base64Key, "base64").toString("utf8");
    const credentials = JSON.parse(rawKey);

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1RHNN4dL5Bl7ASLMh68-pkC1tfD3_hI6UCmewHS4ejno";
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
    console.error("Error submitting form:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
