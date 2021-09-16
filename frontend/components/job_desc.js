import {
  faChevronDown,
  faChevronUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "react-sweet-progress/lib/style.css";

const JobDescription = (job) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
    console.log("clicked");
  };

  return (
    <div className="card">
      <div className="card-content pb-0">
        <div className="job-desc">
          <h1 className="title is-3 m-0">{job.data.company}</h1>
          <h3 className="title is-5">{job.data.position}</h3>

          <div className="detail-line">
            <h3 className="title is-6 m-0 is-inline-block">Location: &nbsp;</h3>
            <h3 className="subtitle is-6 m-0 is-inline-block">
              {job.data.location}
            </h3>
          </div>

          <div className="detail-line">
            <h3 className="title is-6 m-0 is-inline-block">
              Experience: &nbsp;
            </h3>
            <h3 className="subtitle is-6 m-0 is-inline-block">
              {job.data.experience}
            </h3>
          </div>

          <div className="detail-line m-0">
            <h3 className="title is-6 m-0 is-inline-block">
              Skills Required: &nbsp;
            </h3>
            <div className="tags tags-container is-inline-block">
              {job.data.skills_req.map((skill) => {
                return <span className="tag is-info">{skill}</span>;
              })}
            </div>
          </div>

          <div
            className="detail-line exp-div"
            style={{ display: expanded ? "block" : "none" }}
          >
            <h3 className="title is-6 m-0 is-inline-block">Summary: &nbsp;</h3>
            <h3 className="subtitle is-6 m-0 is-inline-block">
              {job.data.summary}
            </h3>
          </div>

          <div className="exp-arrow-div" onClick={toggleExpansion}>
            <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
let x;
