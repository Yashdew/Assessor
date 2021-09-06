import { applicants } from "../../components/dummy"

export default (req, res) => {
    res.status(200).json(applicants)
}