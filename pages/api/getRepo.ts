import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function GetRepo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const resData = await axios.get("https://api.github.com/user/repos", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    });

    res.status(200).json(resData.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
}
