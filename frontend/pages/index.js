import Head from "next/head";
import { useState, useContext } from "react";

import Applicant from "../components/Applicant";
import JobDescription from "../components/job_desc";
import { Loader } from "../components/Loader";
import { Modal, JobDescriptionModalChildren } from "../components/modal";

import { getJobList } from "../utils/filterJobs";
import { getApplicantList } from "../utils/filterApplicants";
import { ApplicantsContext } from "../utils/contexts";
import { StoreContext } from "../utils/store";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchBar } from "../components/SearchBar";

export default function Home() {
  const {
    loading: [loading, setLoading],
    jd: [jobDescriptions, setJobDescriptions],
    candidates: [candidates, setCandidates],
    jdSearch: [jdSearchKeyword, setJdSearchKeyword],
    candidateSearch: [candidateSearchKeyword, setCandidateSearchKeyword],
  } = useContext(StoreContext);

  const [jobModalEnabled, setJobModalEnabled] = useState(false);

  if (loading) return <Loader />;

  return (
    <div>
      <Head>
        <title>Resume Analyser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main-div">
        <div className="columns box-container  m-0">
          <div className="column is-relative p-0 py-2">
            <div className="box">
              <SearchBar
                keyword={jdSearchKeyword}
                setKeyword={setJdSearchKeyword}
                placeholder={"Search Job Description"}
              />
              {getJobList(jdSearchKeyword, jobDescriptions).map((job) => (
                <JobDescription key={job.id} data={job} />
              ))}
            </div>
          </div>

          <div className="column is-relative p-0 py-2">
            <div className="box">
              <SearchBar
                keyword={candidateSearchKeyword}
                setKeyword={setCandidateSearchKeyword}
                placeholder={"Search Candidates"}
              />
              {getApplicantList(candidateSearchKeyword, candidates).map(
                (applicant, index) => {
                  return <Applicant key={index} data={applicant} />;
                }
              )}
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
          <JobDescriptionModalChildren />
        </Modal>
      </div>
    </div>
  );
}
