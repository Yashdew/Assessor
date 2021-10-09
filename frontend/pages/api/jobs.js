import { job_desc } from "../../components/dummy"

export default (req, res) => {
    console.log('request for jobs')
    res.status(200).json(job_desc)
}