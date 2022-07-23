import React, { useState } from "react";

import iconImg from '../../assets/iconImg.png'

import FilePreview from "../FilePreview";
import {FileContainer, FileTextContainer, FileTitle} from './style'
import {PreviewImg} from '../FilePreview/style'

export default function FileUpload(){
  const maxFileSizeInBytes = 500000;

  const [files, setFiles] = useState({});
  const [savedFile, setSavedFile] = useState({})
  const [range, setRange] = useState(4)
  const [step, setStep] = useState('upload')
  const [error, setError] = useState({ show: false })

  const handlePreview = {
    clearError(){
      setError({ show: false })
      setStep('upload')
    },
    saveFile(range){
      setSavedFile(files)
      setRange(range)
      setFiles({})
      setStep('upload')
    }
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
        console.log(updatedFiles)
        setFiles(updatedFiles);
        setSavedFile({})
      }
      setStep('preview')
    },
    remove(fileName){
      delete files[fileName];
      setFiles({ ...files });
    }
  }

  if(step === 'preview'){
    return (
      <FilePreview 
        files={files} 
        fileRemove={handleFile.remove} 
        error={error}  
        functions={handlePreview}
      /> 
    )
  }

  return (
    <FileContainer>
        {
          Object.keys(savedFile).map(
              (key) => <PreviewImg borderRadius={`${range}%`} src={URL.createObjectURL(savedFile[key])} alt="image" key={key} />
          )
        }
        <FileTextContainer>
          <FileTitle>
            <img src={iconImg} alt="img" />
            <h1>Organization Logo</h1>
          </FileTitle>
          <p>Drop the image here or click to browse.</p>
        </FileTextContainer>
        <input
          type="file"
          onChange={handleFile.update}
          title=""
          value=""
        />
      </FileContainer>
  );
}