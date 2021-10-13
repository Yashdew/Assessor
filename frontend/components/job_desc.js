import { Accordion } from './Accordion';
import 'react-sweet-progress/lib/style.css';
import { useState } from 'react';

const JobDescription = (job) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className='card is-clickable' onClick={() => toggleExpansion()}>
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
                return  <span className={`tag ${skill.substring(0, 1).toLowerCase()}`}
                >{skill}</span>;
              })}
            </div>
          </div>
          <Accordion expanded={expanded}>
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
