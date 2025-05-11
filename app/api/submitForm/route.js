import { google } from "googleapis";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    const body = await req.json();

    // Correctly load the JSON key file
    const filePath = path.join(
      process.cwd(),
      "config",
      "google-service-account.json"
    );
    const rawKeyFile = await fs.readFile(filePath, "utf8");
    const credentials = JSON.parse(rawKeyFile);

    // Check required fields
    if (!credentials.client_email || !credentials.private_key) {
      throw new Error("Invalid service account credentials");
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1RHNN4dL5Bl7ASLMh68-pkC1tfD3_hI6UCmewHS4ejno"; // Use actual ID, not project name
    const range = "Sheet1!A2:E";

    // Append the new data row
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
