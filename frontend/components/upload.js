const UploadModal = (props) => {

    return (
        props.enabled ?
            <div className="modal is-active">
                <div className="modal-background" onClick={props.disable}/>
                <div className="modal-content modal-content-container">
                    <div>
                        <h1 className="title is-1">Upload Files</h1>
                        <div className="file has-name is-boxed is-justify-content-center">
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume" />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Choose a file…
                                    </span>
                                </span>
                                <span className="file-name"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={props.disable}></button>
            </div>
            :
            null
    );
}

export default UploadModal;