import "react-sweet-progress/lib/style.css";

const JobDescription = () => {
    return (
        <div className="card">
            <header class="card-header">
                <p class="card-header-title">
                    Component
                </p>
            </header>
            <div class="card-content job-desc">
                <div class="field">
                    <label class="label">New Skill</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="e.g Alex Smith" />
                    </div>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Save</a>
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
    );
}

export default JobDescription;