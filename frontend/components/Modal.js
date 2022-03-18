import JobDescriptionFileUpload from "./FileUpload";
import JobDescriptionFormUpload from "./FormUpload";
import { faClipboard, faFile } from "@fortawesome/free-regular-svg-icons";
import { Tabs, Panel } from "./Tabs";

export const Modal = ({ active, setActive, children }) => {
  return (
    <div className={`modal ${active ? "is-active" : ""} `}>
      <div className="modal-background" onClick={() => setActive(false)}></div>
      <div className="modal-content  mx-2">{children}</div>
    </div>
  );
};

export const JobDescriptionModalChildren = () => {
  return (
    <div className="box has-background-white py-2">
      <Tabs>
        <Panel title="Resume" icon={faFile}>
          <JobDescriptionFileUpload />
        </Panel>
        <Panel title="Job Description" icon={faClipboard}>
          <JobDescriptionFormUpload />
        </Panel>
      </Tabs>
    </div>
  );
};
