import { applicants } from "../../components/dummy"

export default (req, res) => {
    console.log('request for applicants')
    res.status(200).json(applicants)
    //setTimeout(()=> {}, 5000)
}