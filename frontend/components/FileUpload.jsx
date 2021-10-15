import FormData from "form-data";
import { useState, useContext, useRef } from "react";
import axios from "axios";
import { ApplicantsContext } from "../utils/contexts";
import Reward from "react-rewards";

const JobDescriptionFileUpload = () => {
	const rewardRef = useRef();
	const context = useContext(ApplicantsContext);
	const [files, setFiles] = useState([]);
	const [loading, setLoading] = useState(false);

	const isFileValid = (file) => {
		return file.size * 0.000001 <= 10 && file.name.split(".").pop() === "pdf";
	};

	const fileChange = async (event) => {
		if (!isFileValid(event.target.files[0])) {
			return alert(
				"File must be a pdf file and its size is lower than or equal to 10MB"
			);
		}
		setFiles([...files, event.target.files]);
	};

	const uploadFiles = async () => {
		setLoading(true);
		const formData = new FormData();
		for (let i = 0; i < files.length; i++) {
			formData.append(`file`, files[i]);
		}

		const result = await axios({
			method: "post",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/postResume`,
			data: formData,
			headers: {
				"Content-Type": `multipart/form-data`
			}
		});
		context.push(result.data[0]);
		rewardRef.current.rewardMe();
		setLoading(false);
	};

	const deleteFile = (key) => {
		setFiles((prev) => {
			const newFileArray = Array.from(prev);
			newFileArray.splice(key, 1);
			return newFileArray;
		});
	};

	return (
		<div className="has-text-centered">
			<h1 className="title is-5">Upload pdf to analyze</h1>

			<div className="file has-name is-boxed is-justify-content-center">
				<label className="file-label">
					<form enctype="multipart/form-data">
						<input
							className="file-input"
							onChange={fileChange}
							type="file"
							accept="application/pdf"
							name="files"
							multiple={true}
						/>
					</form>

					<span className="file-cta">
						<span className="file-icon">
							<i className="fas fa-upload"></i>
						</span>
						<span className="file-label">Choose Files</span>
					</span>
				</label>
			</div>

			<div className="tags file-names-container tags-container">
				{Object.keys(files).map((key) => {
					return (
						<span className="tag is-primary">
							{files[key][0].name}
							<button
								className="delete"
								onClick={() => {
									deleteFile(key);
								}}
							></button>
						</span>
					);
				})}
			</div>
			<Reward
				ref={rewardRef}
				type="confetti"
				config={{
					fakingRequest: false,
					angle: 90,
					decay: 0.91,
					spread: 88,
					startVelocity: 35,
					elementCount: 169,
					elementSize: 10,
					lifetime: 800,
					zIndex: 10,
					springAnimation: true
				}}
			>
				<button
					className={`button is-primary my-3 has-text-centered ${
						loading ? "is-loading" : ""
					}`}
					onClick={uploadFiles}
				>
					Upload
				</button>
			</Reward>
		</div>
	);
};

export default JobDescriptionFileUpload;
