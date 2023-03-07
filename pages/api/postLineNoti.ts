import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = "https://notify-api.line.me/api/notify";
  const { name, email, tel, message } = req.body;

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${process.env.LINE_NOTIFY_ACCESS_TOKEN}`,
    },
  };

  const data = `message= Name:${name} Email:${email} Tel:${tel} Message:${message}`;

  try {
    const response = await axios.post(url, data, config);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
