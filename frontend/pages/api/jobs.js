import { job_desc } from "../../components/dummy"

export default (req, res) => {
    res.status(200).json(job_desc)
}