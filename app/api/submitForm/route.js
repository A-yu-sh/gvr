import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

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

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const pdfPath = path.resolve(
      "public",
      "Green_Vista_Resort_Information.pdf"
    );

    const message = {
      from: process.env.EMAIL_USERNAME,
      to: body.email,
      subject: `Thank you for your enquiry, ${body.firstName}`,
      html: `
        <p>Hi ${body.firstName},</p>
        <p>Thank you for reaching out to Green Vista Resort! We’ve received your inquiry and appreciate your interest in our services. Our team is currently reviewing your message, and we'll get back to you as soon as possible with the information you requested.</p>
        <p>In the meantime, feel free to explore our website or contact us if you have any further questions.</p>
        <p>We look forward to assisting you!</p>
        <p>Best regards,<br/>The Green Vista Resort Team</p>
      `,
      attachments: [
        {
          filename: "Green_Vista_Resort_Information.pdf",
          path: pdfPath,
        },
      ],
    };

    await transporter.sendMail(message);
    console.log("Email sent");
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
