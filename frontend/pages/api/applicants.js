import { applicants } from "../../components/dummy"

export default (req, res) => {
    console.log('request for applicants')
    setTimeout(()=> {
        res.status(200).json(applicants)
    }, 5000)
}