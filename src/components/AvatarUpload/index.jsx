import React, { useState } from "react";

import iconImg from '../../assets/iconImg.png'

import AvatarPreview from "../AvatarPreview";
import {UploadContainer, UploadTextContainer, UploadTitle} from './style'
import {PreviewImg} from '../AvatarPreview/style'

export default function AvatarUpload(){
  const maxFileSizeInBytes = 500000;

  const [file, setFile] = useState({});
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
      setSavedFile(file)
      setRange(range)
      setFile({})
      setStep('upload')
    }
  }

  const handleFile = {
    validate(files){
      const file = files[0]

      if(!["image/png", "image/jpeg", "image/svg+xml"].includes(file.type)) {
        setError({
          show: true,
          message: 'Oops... the file is not png, svg or jpg'
        })
      }

      if(file.size > maxFileSizeInBytes){
        setError({
          show: true,
          message: 'Oops... too big file!'
        })
      }

      if(!error.show){
        setFile(file);
        setSavedFile({})
      }
    },
    update(e){
      const { files } = e.target;
      if (files.length) {
        handleFile.validate(files);
      }
      setStep('preview')
    },
  }

  if(step === 'upload'){
    return (
      <UploadContainer >
          {
            savedFile.name && (
              <PreviewImg name={`${savedFile.name}`} borderRadius={`${range}%`} src={URL.createObjectURL(savedFile)} alt="image" key={savedFile.name} data-cy={'resultFile'} />
            )
          }
          <UploadTextContainer>
            <UploadTitle>
              <img src={iconImg} alt="img" />
              <h1>Organization Logo</h1>
            </UploadTitle>
            <p>Drop the image here or click to browse.</p>
          </UploadTextContainer>
          <input
            type="file"
            data-cy={'uploadFile'}
            onChange={handleFile.update}
            title=""
            value=""
          />
        </UploadContainer>
    );
  }

  return (
    <AvatarPreview 
      file={file} 
      error={error}  
      functions={handlePreview}
    /> 
  )
}