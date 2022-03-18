import { applicants } from "../../utils/dummyAPI";

export default async (req, res) => {
  if (req.method === "GET") return res.status(200).json(applicants);
};
