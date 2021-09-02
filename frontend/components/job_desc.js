import "react-sweet-progress/lib/style.css";

const JobDescription = () => {
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    Component
                </p>
            </header>
            <div className="card-content job-desc">
                <div className="field">
                    <label className="label">New Skill</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g Alex Smith" />
                    </div>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" className="card-footer-item">Save</a>
                <a href="#" className="card-footer-item">Edit</a>
                <a href="#" className="card-footer-item">Delete</a>
            </footer>
        </div>
    );
}

export default JobDescription;