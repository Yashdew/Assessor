import FormData from 'form-data';
import { useState } from 'react';

const FileUpload = (props) => {
  const [files, setFiles] = useState({});

  const fileChange = async (event) => {
    setFiles(event.target.files);
  };

  const uploadFiles = (props) => {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append(`files[${i}]`, files[i]);
    }

    for (var [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  const deleteFile = (key) => {
    setFiles((prev) => {
      const newFileArray = Array.from(prev);
      newFileArray.splice(key, 1);
      return newFileArray;
    });
  };

  return props.enabled ? (
    <div className='upload-container'>
      <h1 className='title is-1'>Upload Files</h1>

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

      <button className='button is-primary my-3' onClick={uploadFiles}>
        Upload
      </button>
    </div>
  ) : null;
};

export default FileUpload;
