import { useState, useContext } from "react";
import { Accordion } from "./Accordion";
import { faCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StoreContext } from "../utils/store";
import axios from "axios";

const JobDescription = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const {
    selectedJd: [selectedJd, setSelectedJd],
    candidates: [candidates, setCandidates],
  } = useContext(StoreContext);

  const toggleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleSelect = async (id) => {
    setSelectedJd(id);
    if (id) {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/getRankings/${id}/4`
      );
      const updatedScores = result?.data;
      const updatedCandidates = candidates.map((item) => {
        const exists = updatedScores.find(
          (updatedItem) => item.id == updatedItem.id
        );
        return exists ? ((item.score = exists.score), item) : item;
      });
      setCandidates(updatedCandidates);
    }
  };

  const isSelected = selectedJd === data.id;

  return (
    <div className={`card ${isSelected ? "has-background-dark" : ""} `}>
      <div className="card-content pb-0">
        <div className="job-desc">
          <Title
            isSelected={isSelected}
            classNameString={
              "title is-3 m-0 is-flex  is-justify-content-space-between is-align-items-center"
            }
          >
            {data.company}{" "}
            {isSelected ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="xs"
                onClick={() => handleSelect(null)}
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
          </Title>
          <Title isSelected={isSelected} classNameString={"title is-5"}>
            {data.position}
          </Title>

          <div
            className={`${isSelected ? "has-text-white" : ""} is-clickable`}
            onClick={() => toggleExpansion()}
          >
            <div className="detail-line">
              <Title
                isSelected={isSelected}
                classNameString={" title is-6 m-0 is-inline-block"}
              >
                Location: &nbsp;
              </Title>
              <Title
                isSelected={isSelected}
                classNameString={"subtitle is-6 m-0 is-inline-block"}
              >
                {data.location}
              </Title>
            </div>

            <div className="detail-line">
              <Title
                isSelected={isSelected}
                classNameString={" title is-6 m-0 is-inline-block"}
              >
                Experience: &nbsp;
              </Title>
              <Title
                isSelected={isSelected}
                classNameString={"subtitle is-6 m-0 is-inline-block"}
              >
                {data.experience}
              </Title>
            </div>

            <div className="detail-line m-0">
              <Title
                isSelected={isSelected}
                classNameString={"title is-6 m-0 is-inline-block"}
              >
                Skills Required: &nbsp;
              </Title>
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

const Title = ({ isSelected = false, classNameString, children }) => {
  return (
    <h1 className={`${isSelected ? "has-text-white" : ""} ${classNameString}`}>
      {children}
    </h1>
  );
};
