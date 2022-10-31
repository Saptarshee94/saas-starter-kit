import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  fs.readFile("data/features.json", (err, data) => {
    if (err) {
      res.status(500).json("Internal server error");
    }

    res.status(200).json(JSON.parse(String(data)));
  });
}
