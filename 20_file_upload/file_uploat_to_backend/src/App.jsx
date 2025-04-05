import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [fileName, setFileName] = useState('Select or Drag and Drop an Image');

  function handleChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      uploadFile(selectedFile);
    } else {
      setFileName('Select or Drag and Drop an Image');
    }
  }

  function handleDrop(event) {
    console.log(event);
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFileName(droppedFile.name);
      uploadFile(droppedFile);
    }
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function uploadFile(file) {
    const url = 'http://127.0.0.1:5000/upload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.error('There was an error uploading the file!', error);
    });
  }

  return (
    <div>
      <form>
        <h1>React File Upload</h1>
        <div
          className="file-upload"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <label htmlFor="files" className="btn">{fileName}</label>
          <input
            id="files"
            type="file"
            style={{ display: 'none' }}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
