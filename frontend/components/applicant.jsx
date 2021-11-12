import React, { useState } from "react";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import {
  faPhoneAlt,
  faEnvelope,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import leetcodeIcon from "@iconify/icons-cib/leetcode";
import codechefIcon from "@iconify/icons-simple-icons/codechef";
import codeforcesIcon from "@iconify/icons-simple-icons/codeforces";
import linkedinFill from "@iconify/icons-akar-icons/linkedin-fill";
import githubFill from "@iconify/icons-akar-icons/github-fill";
import { Accordion } from "./Accordion";

const Applicant = React.forwardRef((props, ref) => {
  const {
    data: {
      personal_details,
      education,
      total_experience,
      skills,
      score,
      links,
      experience,
    },
  } = props;

  const [expanded, setExpanded] = useState(false);

  if (!score) score = Math.round(Math.random() * 99 + 1);

  const toggleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className={`card `} ref={ref} {...props}>
      <div className="card-content">
        <div
          className="columns  is-clickable"
          onClick={() => toggleExpansion()}
        >
          <div className="column is-one-fifth progress-bar-container is-inline-block">
            <Progress
              theme={{
                active: {
                  symbol: score + "%",
                  trailColor: "white",
                  color: getColor(score),
                },
                success: {
                  symbol: score + "%",
                  trailColor: "lime",
                  color: "green",
                },
              }}
              type="circle"
              percent={score}
            />
          </div>

          <div className="column applicant-detail is-inline-block">
            <h1 className="title is-3 m-0">
              {personal_details ? personal_details?.name : ""}
            </h1>
            <h3 className="subtitle is-6 m-0">
              {education ? education[0] : ""}
            </h3>

            <div className="detail-line">
              <h3 className="title is-6 m-0 is-inline-block">Experience:</h3>
              <h3 className="subtitle is-6 m-0 is-inline-block">
                &nbsp; {total_experience ? total_experience + " years" : 0}
              </h3>
            </div>

            <div className="tags tags-container">
              {skills?.map((skill, index) => {
                return (
                  <span key={index} className="tag is-info">
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <Accordion expanded={expanded}>
          <div className="title is-6"> Experience </div>
          <div className="mb-4 ml-3">
            {experience?.map((item, index) => {
              return <p key={index}>{item} </p>;
            })}
          </div>

          <div className="title is-6"> External Links </div>
          <div className="columns is-multiline  ml-3">
            {personal_details.mobile_number && (
              <div className="column is-narrow">
                <FontAwesomeIcon icon={faPhoneAlt} />
                {"  "}
                {personal_details.mobile_number}
              </div>
            )}
            {personal_details.email && (
              <>
                <div className="column is-narrow">
                  <FontAwesomeIcon icon={faEnvelope} /> {personal_details.email}
                </div>
              </>
            )}
          </div>
          <Links values={links} />
        </Accordion>
      </div>
    </div>
  );
});

const getColor = (value) => {
  const hue = Math.round(value);
  return ["hsl(", hue, ", 50%, 50%)"].join("");
};

const Links = (values) => {
  const { github, leetcode, codechef, codeforces, linkedin, others } =
    values.values;

  return (
    <div className="columns is-multiline  ml-3">
      {leetcode && (
        <div className="column is-narrow">
          <a target="_blank" href={leetcode}>
            <Icon icon={leetcodeIcon} />
          </a>
        </div>
      )}

      {codechef && (
        <div className="column is-narrow">
          <a target="_blank" href={codechef}>
            <Icon icon={codechefIcon} />
          </a>
        </div>
      )}

      {codeforces && (
        <div className="column is-narrow">
          <a target="_blank" href={codeforces}>
            <Icon icon={codeforcesIcon} />
          </a>
        </div>
      )}

      {linkedin && (
        <div className="column is-narrow">
          <a target="_blank" href={linkedin}>
            <Icon icon={linkedinFill} />
          </a>
        </div>
      )}

      {github?.map((link, index) => {
        return (
          <div key={index} className="column is-narrow">
            <a target="_blank" href={link}>
              <Icon icon={githubFill} />
            </a>
          </div>
        );
      })}

      {others?.map((link, index) => {
        return (
          <div key={index} className="column is-narrow">
            <a target="_blank" href={link}>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Applicant;
