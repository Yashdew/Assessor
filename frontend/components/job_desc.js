import "react-sweet-progress/lib/style.css";

const JobDescription = () => {
    return (
        <div className="card">
            <div className="card-content">

                <div className="job-desc">
                    
                    <h1 className="title is-3 no-margin">Persistent Systems</h1>
                    <h3 className="subtitle is-6 no-margin">Backend Intern</h3>

                    <div className="detail-line">
                        <h3 className="title is-6 no-margin inline-block">Location: &nbsp;</h3>
                        <h3 className="subtitle is-6 no-margin inline-block">Pune</h3>
                    </div>

                    <div className="detail-line">
                        <h3 className="title is-6 no-margin inline-block">Experience: &nbsp;</h3>
                        <h3 className="subtitle is-6 no-margin inline-block">3+ years</h3>
                    </div>

                    <div className="detail-line no-margin">
                        <h3 className="title is-6 no-margin inline-block">Skills Required: &nbsp;</h3>
                        <div className="tags tags-container inline-block">
                            {
                                ["Django", "Python", "NodeJS"].map((skill) => {
                                    return <span className="tag is-info">{skill}</span>
                                })
                            }
                        </div>
                    </div>

                    <div className="detail-line">
                        <h3 className="title is-6 no-margin inline-block">Summary: &nbsp;</h3>
                        <h3 className="subtitle is-6 no-margin inline-block">The candidate should have a thorough knowledge if backend frameworks such as Django, NodeJS. knowledge of REST APIs and Python, JavaScript is needed.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDescription;