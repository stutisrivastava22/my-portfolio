import { google } from "googleapis";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactSubmission = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function getText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const submission = payload as ContactSubmission;

  if (getText(submission.website)) {
    return Response.json({ success: true });
  }

  const name = getText(submission.name);
  const email = getText(submission.email);
  const subject = getText(submission.subject);
  const message = getText(submission.message);

  if (
    !name || name.length > 100 ||
    !EMAIL_PATTERN.test(email) || email.length > 254 ||
    !subject || subject.length > 200 ||
    !message || message.length > 5000
  ) {
    return Response.json({ error: "Please check the form fields and try again." }, { status: 400 });
  }

  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const range = process.env.GOOGLE_SHEETS_RANGE || "Sheet1!A:E";

  if (!clientEmail || !privateKey || !spreadsheetId) {
    return Response.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  try {
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    });
    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[new Date().toISOString(), name, email, subject, message]]
      }
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "We couldn't save your message. Please try again." }, { status: 502 });
  }
}