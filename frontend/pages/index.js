import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Applicant from "../components/applicant";
import JobDescription from "../components/job_desc"

let applicants = [
	{
		name: "Jayesh Padhiar",
		college: "Smt. Kashibai Navale College of Engineering",
		skills: ["Python",
			"JavaScript",
			"AngularJS",
			"ReactJS",
			"C++",
			"C",
			"Git",
			"MySQL",
		],
		score: 100
	},
	{
		name: "Rishi Parmar",
		college: "Sinhgad College of Engineering",
		skills: ["Everything", "Everything"],
		score: 90
	},
	{
		name: "Sumit Kolpekwar",
		college: "Smt. Kashibai Navale College of Engineering",
		skills: ["Python",
			"JavaScript",
			"ReactJS",
			"C++",
			"C",
			"Git",
			"MySQL",
		],
		score: 70
	},
	{
		name: "Atharva Kulkarni",
		college: "Smt. Kashibai Navale College of Engineering",
		skills: ["Python",
			"ReactJS",
			"C++",
			"C",
			"Git",
			"MySQL",
		],
		score: 60
	},
	{
		name: "Yash Dewangan",
		college: "Smt. Kashibai Navale College of Engineering",
		skills: ["Python",
			"Django",
			"C++",
			"C",
			"Git",
			"MySQL",
		],
		score: 50
	},
	{
		name: "Aditya Pandey",
		college: "Smt. Kashibai Navale College of Engineering",
		skills: ["Python",
			"C++",
			"C",
			"Git",
			"MySQL",
		],
		score: 40
	},
	{
		name: "Random Douchebag",
		college: "Smt. Kashibai Navale College of Engineering",
		skills: [
			"C++",
			"C",
			"MySQL",
		],
		score: 20
	},

]

let job_desc = [
	{
		company: "Persistent Systems",
		position: "Bakend Developer",
		location: "Pune",
		experience: "2-3 Years",
		skills_req: ['Django', 'Python', 'Node', 'Javascript'],
		summary: "The candidate should have a thorough knowledge if backend frameworks such as Django, NodeJS. knowledge of REST APIs and Python, JavaScript is needed."
	},
	{
		company: "Jio Platforms",
		position: "Fullstack Developer",
		location: "Navi Mumbai",
		experience: "1-2 Years",
		skills_req: ['ReactJS', 'AngularJS', 'JavaScript', 'HTML', 'CSS', 'Python', 'NodeJS'],
		summary: "The candidate should have a thorough knowledge if backend frameworks such as Django, NodeJS. knowledge of REST APIs and Python, JavaScript is needed."
	},
	{
		company: "eQ Technologic",
		position: "Backend Developer",
		location: "Pune",
		experience: "3-4 Years",
		skills_req: ['Django', 'NodeJS'],
		summary: "The candidate should have a thorough knowledge if backend frameworks such as Django, NodeJS. knowledge of REST APIs and Python, JavaScript is needed."
	},
	{
		company: "Cognizant",
		position: "DevOps Engineer",
		location: "Pune",
		experience: "None",
		skills_req: ['C++', 'Python'],
		summary: "The candidate should have a thorough knowledge if backend frameworks such as Django, NodeJS. knowledge of REST APIs and Python, JavaScript is needed."
	},
	{
		company: "Nice Systems",
		position: "Software Engineer",
		location: "Mumbai",
		experience: "1-2 Years",
		skills_req: ['C++', 'Java'],
		summary: "The candidate should have a thorough knowledge if backend frameworks such as Django, NodeJS. knowledge of REST APIs and Python, JavaScript is needed."
	},
]

export default function Home() {
	return (
		<div>
			<head>
				<title>Resume Analyser</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"></link>
			</head>
			<div className="main-div">
				<div className="columns is-gapless box-container">
					<div className="column">
						<div className="box">

							{
								job_desc.map((job) => {
									//return <Applicant data={applicant} />;
									return<JobDescription data={job} />
								})
							}


							<div className="float">
								<FontAwesomeIcon className="float-action-button" icon={faPlus} />
							</div>

						</div>
					</div>
					<div className="column">
						<div className="box">
							{
								applicants.map((applicant) => {
									return <Applicant data={applicant} />;
								})
							}

							<div className="float">
								<FontAwesomeIcon className="float-action-button" icon={faPlus} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}