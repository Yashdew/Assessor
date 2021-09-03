import "react-sweet-progress/lib/style.css";

const JobDescription = (job) => {
    return (
        <div className="card">
            <div className="card-content">

                <div className="job-desc">
                    
                    <h1 className="title is-3 no-margin">{job.data.company}</h1>
                    <h3 className="title is-5">{job.data.position}</h3>

                    <div className="detail-line">
                        <h3 className="title is-6 no-margin inline-block">Location: &nbsp;</h3>
                        <h3 className="subtitle is-6 no-margin inline-block">{job.data.location}</h3>
                    </div>

                    <div className="detail-line">
                        <h3 className="title is-6 no-margin inline-block">Experience: &nbsp;</h3>
                        <h3 className="subtitle is-6 no-margin inline-block">{job.data.experience}</h3>
                    </div>

                    <div className="detail-line no-margin">
                        <h3 className="title is-6 no-margin inline-block">Skills Required: &nbsp;</h3>
                        <div className="tags tags-container inline-block">
                            {
                                job.data.skills_req.map((skill) => {
                                    return <span className="tag is-info">{skill}</span>
                                })
                            }
                        </div>
                    </div>

                    <div className="detail-line">
                        <h3 className="title is-6 no-margin inline-block">Summary: &nbsp;</h3>
                        <h3 className="subtitle is-6 no-margin inline-block">{job.data.summary}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDescription;