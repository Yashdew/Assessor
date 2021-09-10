import { useEffect, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Applicant from "../components/applicant";
import UploadModal from "../components/modal";
import JobDescription from "../components/job_desc"

export default function Home(data) {

	const [jobSearch, setJobSearch] = useState('');
	const [candidateSearch, setCandidateSearch] = useState('');

	const [jobs, setJobs] = useState([]);
	const [applicants, setApplicants] = useState([]);

	const [loading, setLoading] = useState({ jobs_loading: true, applicants_loading: true })
	const [uploadModalEnabled, setUploadModalEnabled] = useState(false)

	useEffect(
		async () => {
			const jobs_res = await fetch('http://localhost:3000/api/jobs')
			setJobs(await jobs_res.json())
			//setLoading({ ...loading, jobs_loaded: false })
			setLoading(prevLoading => { return { ...prevLoading, jobs_loading: false } })
			console.log('Jobs Loaded')

			const app_res = await fetch('http://localhost:3000/api/applicants')
			setApplicants(await app_res.json())
			//setLoading({ ...loading, applicants_loaded: false })
			setLoading(prevLoading => { return { ...prevLoading, applicants_loading: false } })
			console.log('Applicants Loaded')

			console.log(loading)
		}, []
	)

	const getJobList = () => {
		if (jobSearch == '') {
			return jobs
		}

		const list = jobs.filter((job) => {
			return job.company.toLowerCase().includes(jobSearch.toLowerCase())
				||
				job.position.toLowerCase().includes(jobSearch.toLowerCase())
		}).map((job) => {
			return job
		})

		return list
	}

	const getApplicantList = () => {
		if (candidateSearch == '') {
			return applicants
		}

		const list = applicants.filter((applicant) => {
			return applicant.name.toLowerCase().includes(candidateSearch.toLowerCase())
				||
				applicant.college.toLowerCase().includes(candidateSearch.toLowerCase())
		}).map((applicant) => {
			return applicant
		})

		return list
	}

	return (
		<div>
			<head>
				<title>Resume Analyser</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"></link>
			</head>
			<div className="main-div">
				<div className="columns is-gapless box-container">
					<div className="column is-three-fifths is-relative">
						<div className="box">
							<div className="search-div">
								<input className="input is-rounded is-small center-text" value={jobSearch} onChange={e => setJobSearch(e.target.value)} type="text" placeholder="Search" />
							</div>
							{
								loading['jobs_loading'] ?
									<div className="loading-container">
										<div className="loading" />
									</div>
									:
									getJobList().map((job) => {
										return <JobDescription data={job} />
									})
							}
							<div className="float" onClick={() => setUploadModalEnabled(true)}>
								<FontAwesomeIcon className="float-action-button" icon={faPlus} />
							</div>
						</div>
					</div>
					<div className="column is-relative">
						<div className="box">
							<div className="search-div">
								<input className="input is-rounded is-small center-text" value={candidateSearch} onChange={e => setCandidateSearch(e.target.value)} type="text" placeholder="Search" />
							</div>
							{
								loading['applicants_loading'] ?
									<div className="loading-container">
										<div className="loading" />
									</div>
									:
									getApplicantList().map((applicant) => {
										return <Applicant data={applicant} />
									})
							}
							<div className="float" onClick={() => setUploadModalEnabled(true)}>
								<FontAwesomeIcon className="float-action-button" icon={faPlus} />
							</div>
						</div>
					</div>
				</div>
				<UploadModal enabled={uploadModalEnabled} disable={() => setUploadModalEnabled(false)} />
			</div>
		</div>
	)
}