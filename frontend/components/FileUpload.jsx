import FormData from 'form-data';
import { useState, useContext } from 'react';
import axios from 'axios';
import { ApplicantsContext } from '../utils/contexts';

const JobDescriptionFileUpload = () => {
  const context = useContext(ApplicantsContext);
  console.log(context);
  const [files, setFiles] = useState({});
  const [loading, setLoading] = useState(false);

  const fileChange = async (event) => {
    setFiles(event.target.files);
  };

  const uploadFiles = async () => {
    setLoading(true);
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append(`file`, files[i]);
    }

    const result = await axios({
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/postResume`,
      data: formData,
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    });
    context.push(result.data[0]);
    setLoading(false);
  };

  const deleteFile = (key) => {
    setFiles((prev) => {
      const newFileArray = Array.from(prev);
      newFileArray.splice(key, 1);
      return newFileArray;
    });
  };

  return (
    <div className='has-text-centered'>
      <h1 className='title is-5'>Upload pdf to analyze</h1>

      <div className='file has-name is-boxed is-justify-content-center'>
        <label className='file-label'>
          <input
            className='file-input'
            onChange={fileChange}
            type='file'
            accept='application/pdf'
            name='files'
            multiple={true}
          />
          <span className='file-cta'>
            <span className='file-icon'>
              <i className='fas fa-upload'></i>
            </span>
            <span className='file-label'>Choose Files</span>
          </span>
        </label>
      </div>

      <div className='tags file-names-container tags-container'>
        {Object.keys(files).map((key) => {
          return (
            <span className='tag is-primary'>
              {files[key].name}
              <button
                className='delete'
                onClick={() => {
                  deleteFile(key);
                }}
              ></button>
            </span>
          );
        })}
      </div>

      <button
        className={`button is-primary my-3 has-text-centered ${
          loading ? 'is-loading' : ''
        }`}
        onClick={uploadFiles}
      >
        Upload
      </button>
    </div>
  );
};

export default JobDescriptionFileUpload;
