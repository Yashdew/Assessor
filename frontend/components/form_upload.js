import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faMapPin,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const FormUpload = (props) => {
  return props.enabled ? (
    <div className="upload-container">
      <div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Company</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Company Name" />
                <span class="icon is-small is-left">
                  <FontAwesomeIcon icon={faBuilding} />
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input
                  class="input is-success"
                  type="text"
                  placeholder="Designation"
                />
                <span class="icon is-small is-left">
                  <FontAwesomeIcon icon={faUserGraduate} />
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Experience</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option>0-2 Years</option>
                    <option>2-5 Years</option>
                    <option>5+ Years</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Location</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Enter Location" />
                <span class="icon is-small is-left">
                  <FontAwesomeIcon icon={faMapPin} />
                </span>
              </p>
            </div>

            <div class="field is-horizontal is-align-items-center">
              <div class="field-label">
                <label class="label">Remote</label>
              </div>
              <div class="field is-narrow">
                <div class="control">
                  <label class="radio">
                    <input type="radio" name="member" />
                    &nbsp; Yes
                  </label>
                  <label class="radio">
                    <input type="radio" name="member" />
                    &nbsp; No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Skills</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Enter Required Skills"
                />
                <span class="icon is-small is-left">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Job Description</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Explain in brief about the Job"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button is-primary">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default FormUpload;
