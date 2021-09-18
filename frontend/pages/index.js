import Head from 'next/head';
import { useEffect, useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Applicant from '../components/applicant';
import UploadModal, {
  Modal,
  JobDescriptionModalChildren,
  CandidateModalChildren,
} from '../components/modal';
import JobDescription from '../components/job_desc';
import { Loader } from '../components/loader';
import { getJobList } from '../utils/filterJobs';
import { getApplicantList } from '../utils/filterApplicants';

export default function Home() {
  const [jobSearch, setJobSearch] = useState('');
  const [candidateSearch, setCandidateSearch] = useState('');

  const [jobs, setJobs] = useState([]);
  const [applicants, setApplicants] = useState([]);

  const [loading, setLoading] = useState(true);
  const [jobModalEnabled, setJobModalEnabled] = useState(false);
  const [candModalEnabled, setCandModalEnabled] = useState(false);

  useEffect(async () => {
    const jobs_res = await fetch('http://localhost:3000/api/jobs');
    setJobs(await jobs_res.json());

    const app_res = await fetch('http://localhost:3000/api/applicants');
    setApplicants(await app_res.json());

    setLoading(false);
  }, []);

  if (loading) return <Loader />;

  console.log(jobs, applicants);

  return (
    <div>
      <Head>
        <title>Resume Analyser</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css'
        ></link>
      </Head>

      <div className='main-div'>
        <div className='columns box-container m-0'>
          <div className='column is-relative p-0 py-2'>
            <div className='box'>
              <div className='search-div'>
                <input
                  className='input is-rounded is-small has-text-centered'
                  value={jobSearch}
                  onChange={(e) => setJobSearch(e.target.value)}
                  type='text'
                  placeholder='Search'
                />
              </div>
              {getJobList(jobSearch, jobs).map((job) => (
                <JobDescription data={job} />
              ))}
              <div className='float' onClick={() => setJobModalEnabled(true)}>
                <FontAwesomeIcon
                  className='float-action-button'
                  icon={faPlus}
                />
              </div>
            </div>
          </div>

          <div className='column is-relative p-0 py-2'>
            <div className='box'>
              <div className='search-div'>
                <input
                  className='input is-rounded is-small has-text-centered'
                  value={candidateSearch}
                  onChange={(e) => setCandidateSearch(e.target.value)}
                  type='text'
                  placeholder='Search'
                />
              </div>
              {getApplicantList(candidateSearch, applicants).map(
                (applicant) => (
                  <Applicant data={applicant} />
                )
              )}
              <div className='float' onClick={() => setCandModalEnabled(true)}>
                <FontAwesomeIcon
                  className='float-action-button'
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
        <Modal
          active={candModalEnabled}
          setActive={() => setCandModalEnabled(false)}
        >
          <CandidateModalChildren />
        </Modal>
      </div>
    </div>
  );
}
