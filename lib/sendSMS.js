// lib/sendSMS.js
export async function sendSMS({ name, phone }) {
  try {
    const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
      method: "POST",
      headers: {
        authorization: process.env.FAST2SMS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        route: "q",
        message: `Hi ${name}, thanks for contacting Green Vista Resort! We’ll get back to you soon.`,
        language: "english",
        flash: 0,
        numbers: phone,
      }),
    });

    const data = await response.json();

    if (!data.return) {
      throw new Error(`Fast2SMS Error: ${data.message}`);
    }

    return true;
  } catch (error) {
    console.error("SMS sending failed:", error);
    return false;
  }
}
