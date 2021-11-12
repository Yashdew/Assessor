import { Accordion } from "./Accordion";
import "react-sweet-progress/lib/style.css";
import { useState } from "react";
import { faCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobDescription = ({ data, selected, setSelected }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <div className="card">
      <div className="card-content pb-0">
        <div className="job-desc">
          <h1 className="title is-3 m-0 is-flex  is-justify-content-space-between is-align-items-center">
            {data.company}{" "}
            {selected === data.id ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="xs"
                onClick={() => handleSelect(0)}
                className="is-clickable"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCircle}
                size="xs"
                onClick={() => handleSelect(data.id)}
                className="is-clickable"
              />
            )}
          </h1>
          <h3 className="title is-5">{data.position}</h3>
          <div className="is-clickable" onClick={() => toggleExpansion()}>
            <div className="detail-line">
              <h3 className="title is-6 m-0 is-inline-block">
                Location: &nbsp;
              </h3>
              <h3 className="subtitle is-6 m-0 is-inline-block">
                {data.location}
              </h3>
            </div>

            <div className="detail-line">
              <h3 className="title is-6 m-0 is-inline-block">
                Experience: &nbsp;
              </h3>
              <h3 className="subtitle is-6 m-0 is-inline-block">
                {data.experience}
              </h3>
            </div>

            <div className="detail-line m-0">
              <h3 className="title is-6 m-0 is-inline-block">
                Skills Required: &nbsp;
              </h3>
              <div className="tags tags-container is-inline-block">
                {data.skills_req.map((skill, index) => {
                  return (
                    <span key={index} className="tag is-info">
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            <Accordion expanded={expanded}>
              <h3 className="title is-6 m-0 is-inline-block">
                Summary: &nbsp;
              </h3>
              <h3 className="subtitle is-6 m-0 is-inline-block">
                {data.summary}
              </h3>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
