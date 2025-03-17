import type { NextApiRequest, NextApiResponse } from "next";

function getRequestParams(email: string) {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  const DATACENTER = API_KEY?.split("-")[1];
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return { url, data, headers };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const email = req.body;

  if (!email || !email.length) {
    return res.status(400).json({ error: "Please enter a valid email address" });
  }

  try {
    const { url, data, headers } = getRequestParams(email);

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    res.status(200).json({ error: null });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
