import { NextApiRequest, NextApiResponse } from "next";

import axios from "../axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = await axios.get(`/api/company?id=${req.query.id}`);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(err.response.data.error.status).json(err.response.data.error);
  }
}
