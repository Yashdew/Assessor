import { useState } from "react";
import FileUpload from "./file_upload";
import FormUpload from "./form_upload";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faFile } from "@fortawesome/free-regular-svg-icons";

const UploadModal = (props) => {

	const [fileTabSelected, setFileTabSelected] = useState(true)

	return (
		props.enabled ?
			<div className="modal is-active">
				<div className="modal-background" onClick={props.disable} />
				<div className="modal-content modal-content-container">

					<div style={{ width: "100%" }}>
						<div className="tabs is-centered is-boxed">
							<ul>
								<li className={fileTabSelected ? "is-active" : ""} onClick={() => setFileTabSelected(true)}>
									<a>
										<span className="icon is-small">
											<FontAwesomeIcon icon={faFile} />
										</span>
										<span>Upload Files</span>
									</a>
								</li>
								<li className={!fileTabSelected ? "is-active" : ""} onClick={() => setFileTabSelected(false)}>
									<a>
										<span className="icon is-small">
											<FontAwesomeIcon icon={faClipboard}/>
										</span>
										<span>Upload Form</span>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<FileUpload enabled={fileTabSelected} />
					<FormUpload enabled={!fileTabSelected} />

				</div>
				<button className="modal-close is-large" aria-label="close" onClick={props.disable}></button>
			</div>
			:
			null
	);
}

export default UploadModal;