import React, { useRef, useState } from "react";

const maxFileSizeInBytes = 500000;

export default function FileUpload({
  multiple
}){
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const convertBytesToKB = (bytes) => Math.round(bytes / 1024)

  const handleFile = {
    validate(newFiles){
      for (let file of newFiles) {
        if(["image/png", "image/jpeg", "image/svg+xml"].includes(file.type)){
          if(file.size <= maxFileSizeInBytes){
            if (!multiple) {
              return { file };
            }
            files[file.name] = file;
          } else {
            alert('Ops... arquivo muito grande!')
          }
        } else {
          alert('Ops... o arquivo não é png, svg ou jpg')
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
      
      <section>
        {Object.keys(files).map((fileName, index) => {
          let file = files[fileName];
          let isImageFile = file.type.split("/")[0] === "image";
          return (
            <section key={fileName}>
              <div>
                {isImageFile && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`file preview ${index}`}
                  />
                )}
                <div >
                  <span>{file.name}</span>
                  <aside>
                    <span>{convertBytesToKB(file.size)} kb</span>
                    <i
                      className="fas fa-trash-alt"
                      onClick={() => handleFile.remove(fileName)}
                    />
                  </aside>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
}