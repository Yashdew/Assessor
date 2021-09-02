import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

function getColor(value) {
    const hue = Math.round(value);
    return ["hsl(", hue, ", 50%, 50%)"].join("");
}

const Applicant = (applicant) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="columns">

                    <div className="column is-one-fifth progress-bar-container">
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
                            width={100}
                            percent={applicant.data.score}
                        />
                    </div>

                    <div className="column applicant-detail">
                        <h3 className="title" >{applicant.data.name}</h3>
                        <h1 className="subtitle is-5">{applicant.data.college}</h1>

                        <div className="tags">

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