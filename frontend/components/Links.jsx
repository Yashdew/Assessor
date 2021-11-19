import React from "react";
import { Icon } from "@iconify/react";
import leetcodeIcon from "@iconify/icons-cib/leetcode";
import codechefIcon from "@iconify/icons-simple-icons/codechef";
import codeforcesIcon from "@iconify/icons-simple-icons/codeforces";
import linkedinFill from "@iconify/icons-akar-icons/linkedin-fill";
import githubFill from "@iconify/icons-akar-icons/github-fill";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default Links;
