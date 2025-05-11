import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { Resend } from "resend";

// Initialize Resend
const resend = new Resend(process.env.PUBLIC_RESEND_API_KEY);

async function processFormData(body) {
  try {
    // Decode and parse Google service account
    const base64Key = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64;
    const keyJson = JSON.parse(
      Buffer.from(base64Key, "base64").toString("utf-8")
    );

    // Google Sheets setup
    const auth = new google.auth.GoogleAuth({
      credentials: keyJson,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = process.env.PUBLIC_SPREADSHEET_ID;
    const range = "Sheet1!A2:E";

    // Append form data to Google Sheet
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

    // Load the PDF as a buffer
    const pdfPath = path.resolve(
      "public",
      "Green_Vista_Resort_Information.pdf"
    );
    const pdfBuffer = await fs.readFile(pdfPath);

    // Send email using Resend
    await resend.emails.send({
      from: process.env.EMAIL_USERNAME, // must be a verified sender in Resend
      to: body.email,
      subject: `Green Vista Resort : Thank you for your enquiry, ${body.firstName}`,
      html: `
        <p>Hi ${body.firstName},</p>
        <p>Thank you for reaching out to <strong>Green Vista Resort</strong>! We’ve received your inquiry and appreciate your interest in our services. Our team is currently reviewing your message, and we'll get back to you as soon as possible.</p>
        <p>Attached is a PDF with detailed information about our resort offerings.</p>
        <p>We look forward to assisting you!</p>
        <p>Warm regards,<br/>The Green Vista Resort Team</p>
      `,
      attachments: [
        {
          filename: "Green_Vista_Resort_Information.pdf",
          content: pdfBuffer.toString("base64"),
          type: "application/pdf",
        },
      ],
    });

    console.log("Email sent via Resend");
  } catch (err) {
    console.error("Error processing form data:", err);
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    // Trigger async processing (Google Sheets + Email)
    processFormData(body);

    // Respond immediately for better UX
    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (err) {
    console.error("Error submitting form:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
