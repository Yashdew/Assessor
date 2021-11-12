import Head from "next/head";
import { useEffect, useState } from "react";
import FlipMove from "react-flip-move";

import Applicant from "../components/applicant";
import JobDescription from "../components/job_desc";
import { Loader } from "../components/loader";
import { Modal, JobDescriptionModalChildren } from "../components/modal";
import { getJobList } from "../utils/filterJobs";
import { getApplicantList } from "../utils/filterApplicants";
import { ApplicantsContext } from "../utils/contexts";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [jobSearch, setJobSearch] = useState("");
  const [candidateSearch, setCandidateSearch] = useState("");

  const [jobs, setJobs] = useState([]);
  const [applicants, setApplicants] = useState([]);

  const [jobModalEnabled, setJobModalEnabled] = useState(false);

  const [selectedJD, setSelectedJD] = useState(1);

  useEffect(async () => {
    const jobs_res = await fetch("api/jobs");
    setJobs(await jobs_res.json());

    const app_res = await fetch("api/applicants");
    setApplicants(await app_res.json());

    setLoading(false);
  }, [selectedJD]);

  if (loading) return <Loader />;

  return (
    <div>
      <Head>
        <title>Resume Analyser</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"
        ></link>
      </Head>

      <div className="main-div">
        <div className="columns box-container m-0">
          <div className="column is-relative p-0 py-2">
            <div className="box">
              <div className="search-div">
                <input
                  className="input is-rounded is-small has-text-centered"
                  value={jobSearch}
                  onChange={(e) => setJobSearch(e.target.value)}
                  type="text"
                  placeholder="Search"
                />
              </div>
              {getJobList(jobSearch, jobs).map((job) => (
                <JobDescription
                  key={job.id}
                  data={job}
                  selected={selectedJD}
                  setSelected={setSelectedJD}
                />
              ))}
            </div>
          </div>

          <div className="column is-relative p-0 py-2">
            <div className="box">
              <div className="search-div">
                <input
                  className="input is-rounded is-small has-text-centered"
                  value={candidateSearch}
                  onChange={(e) => setCandidateSearch(e.target.value)}
                  type="text"
                  placeholder="Search"
                />
              </div>
              <FlipMove>
                {getApplicantList(candidateSearch, applicants).map(
                  (applicant, index) => {
                    return <Applicant key={index} data={applicant} />;
                  }
                )}
              </FlipMove>

              <div
                className="float is-clickable"
                onClick={() => setJobModalEnabled(true)}
              >
                <FontAwesomeIcon
                  className="float-action-button"
                  icon={faPlus}
                />
              </div>
            </div>
          </div>
        </div>
        <Modal
          active={jobModalEnabled}
          setActive={() => setJobModalEnabled(false)}
        >
          <ApplicantsContext.Provider value={applicants}>
            <JobDescriptionModalChildren />
          </ApplicantsContext.Provider>
        </Modal>
      </div>
    </div>
  );
}
