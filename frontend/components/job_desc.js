import { Accordion } from './Accordion';
import 'react-sweet-progress/lib/style.css';

const JobDescription = (job) => {
  return (
    <div className='card'>
      <div className='card-content pb-0'>
        <div className='job-desc'>
          <h1 className='title is-3 m-0'>{job.data.company}</h1>
          <h3 className='title is-5'>{job.data.position}</h3>

          <div className='detail-line'>
            <h3 className='title is-6 m-0 is-inline-block'>Location: &nbsp;</h3>
            <h3 className='subtitle is-6 m-0 is-inline-block'>
              {job.data.location}
            </h3>
          </div>

          <div className='detail-line'>
            <h3 className='title is-6 m-0 is-inline-block'>
              Experience: &nbsp;
            </h3>
            <h3 className='subtitle is-6 m-0 is-inline-block'>
              {job.data.experience}
            </h3>
          </div>

          <div className='detail-line m-0'>
            <h3 className='title is-6 m-0 is-inline-block'>
              Skills Required: &nbsp;
            </h3>
            <div className='tags tags-container is-inline-block'>
              {job.data.skills_req.map((skill) => {
                return <span className='tag is-info'>{skill}</span>;
              })}
            </div>
          </div>
          <Accordion>
            <h3 className='title is-6 m-0 is-inline-block'>Summary: &nbsp;</h3>
            <h3 className='subtitle is-6 m-0 is-inline-block'>
              {job.data.summary}
            </h3>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
let x;
