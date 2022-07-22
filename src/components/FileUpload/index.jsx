import React, { useRef, useState } from "react";

import FilePreview from "../FilePreview";

export default function FileUpload(){
  const maxFileSizeInBytes = 500000;
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});
  const [error, setError] = useState({ show: false })

  function clearError(){
    setError({ show: false })
  }


  const handleFile = {
    validate(newFiles){
      for (let file of newFiles) {
        if(["image/png", "image/jpeg", "image/svg+xml"].includes(file.type)){
          if(file.size <= maxFileSizeInBytes){
            return { file };
          } else {
            setError({
              show: true,
              message: 'Oops... too big file!'
            })
          }
        } else {
          setError({
            show: true,
            message: 'Oops... the file is not png, svg or jpg'
          })
        }      
      }
      return { ...files };
    },
    update(e){
      const { files: newFiles } = e.target;
      if (newFiles.length) {
        let updatedFiles = handleFile.validate(newFiles);
        setFiles(updatedFiles);
      }
      
    },
    remove(fileName){
      delete files[fileName];
      setFiles({ ...files });
    }
  }

  return (
    <>
      <section>
        <button type="button" onClick={() => fileInputField.current.click()}>
          <i className="fas fa-file-upload" />
        </button>
        <input
          type="file"
          ref={fileInputField}
          onChange={handleFile.update}
          title=""
          value=""
        />
      </section>
      
      <FilePreview 
        files={files} 
        fileRemove={handleFile.remove} 
        error={error}  
        clearError={clearError} />
    </>
  );
}