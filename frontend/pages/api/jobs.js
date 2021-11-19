import { job_desc } from "../../utils/dummyAPI";

export default (req, res) => {
  res.status(200).json(job_desc);
};
