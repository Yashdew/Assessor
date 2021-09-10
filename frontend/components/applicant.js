import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const getColor = (value) => {

    const hue = Math.round(value);
    return ["hsl(", hue, ", 50%, 50%)"].join("");
}

const Applicant = (applicant) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="columns">

                    <div className="column is-one-fifth progress-bar-container is-inline-block">
                        <Progress
                            theme={
                                {
                                    error: {
                                        symbol: applicant.data.score + '%',
                                        trailColor: 'pink',
                                        color: 'red'
                                    },
                                    default: {
                                        symbol: applicant.data.score + '%',
                                        trailColor: 'lightblue',
                                        color: 'blue'
                                    },
                                    active: {
                                        symbol: applicant.data.score + '%',
                                        trailColor: 'white',
                                        color: getColor(applicant.data.score)
                                    },
                                    success: {
                                        symbol: applicant.data.score + '%',
                                        trailColor: 'lime',
                                        color: 'green'
                                    }
                                }
                            }
                            type="circle"
                            percent={applicant.data.score}
                        />
                    </div>

                    <div className="column applicant-detail is-inline-block">
                        <h1 className="title is-3 m-0">{applicant.data.name}</h1>
                        <h3 className="subtitle is-6 m-0">{applicant.data.college}</h3>

                        <div className="detail-line">
                            <h3 className="title is-6 m-0 is-inline-block">Experience:</h3>
                            <h3 className="subtitle is-6 m-0 is-inline-block">&nbsp; 3+ years</h3>
                        </div>


                        <div className="tags tags-container">
                            {
                                applicant.data.skills.map((skill) => {
                                    return <span className="tag is-info">{skill}</span>
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Applicant;