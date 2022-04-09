import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

export default async function handler(req, res) {
    console.log('TEST TEST')
  if (req.method !== "POST") {
    res.status(405).send({ message: "Method not allowed" });
  }

  console.log(process.env.GOOGLE_SHEET_ID);
  const body = req.body;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const reponse = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.attend, body.guests, body.note]],
      },
    });

    return res.status(200).json({
      message: "Successfully submitted",
      data: reponse,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
}
