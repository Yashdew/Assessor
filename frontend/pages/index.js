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
		score: 80
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
		score: 76
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
		score: 75
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
		score: 76
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
		score: 70
	},
	{
		name: "Random Douchebag",
		college: "Smt. Kashibai Navale College of Engineering",
		skills: [
			"C++",
			"C",
			"MySQL",
		],
		score: 40
	},

]

let jod_desc = [""]

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

							<JobDescription />

							<div className="float">
								<FontAwesomeIcon style={{
									width: '30px',
									height: '30px',
									margin: '25px',
								}} icon={faPlus} />
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
								<FontAwesomeIcon style={{
									width: '30px',
									height: '30px',
									margin: '25px',
								}} icon={faPlus} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}