import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get((req, res) => {
  const categories = [
    "Houses",
    "Townhomes",
    "Multi-family",
    "Condos/Co-ops",
    "Lots/Lands",
    "Apartments",
    "Manufactured",
  ];
  res.status(200).json(categories); // ✅ Use .json() instead of .send()
});

export default handler;
