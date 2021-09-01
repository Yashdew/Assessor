import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


const Applicant = (appliant) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="columns">

                    <div className="column is-one-fifth">
                        <Progress
                            width={100}
                            type="circle"
                            percent={appliant.data.score}
                        />
                    </div>

                    <div className="column applicant-detail">
                        <h3 className="title" >{appliant.data.name}</h3>
                        <h1 className="subtitle is-5">{appliant.data.college}</h1>

                        <div class="tags">

                            {
                                appliant.data.skills.map((skill) => {
                                    return <span class="tag is-info">{skill}</span>
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