import React, { useState } from "react";

import iconWarning from '../../assets/iconWarning.png'
import iconClose from '../../assets/iconClose.png'

import {PreviewContainer, PreviewImgArea, PreviewImg, PreviewText, PreviewBtn} from './style'

export default function FilePreview({files, fileRemove, error, clearError}){
    const [range, setRange] = useState(4)

    if(!error?.show){
        return (
            <PreviewContainer>
                {
                    Object.keys(files).map(
                        (key) => <PreviewImg borderRadius={`${range}%`} src={URL.createObjectURL(files[key])} alt="image" />
                    )
                }
                <PreviewText>
                    <h1>Crop</h1>
                    <input type="range" value={range} onChange={(ev) => setRange(ev.target.value)} min={4} max={50}/>
                    <PreviewBtn>
                        <button>Save</button>
                    </PreviewBtn>
                </PreviewText>
                <span onClick={clearError}>
                    <img src={iconClose} alt="close" />
                </span>
            </PreviewContainer>
        )
    } else {
        return (
            <PreviewContainer>
                <PreviewImgArea borderRadius={'50%'}>
                    <img src={iconWarning} alt="warning"  />
                </PreviewImgArea>
                <PreviewText h1Color={'warn'}>
                    <h1>Sorry, the upload failed</h1>
                    <h2>{error.message}</h2>
                    <p onClick={clearError}>Try again</p>
                </PreviewText>
                <span onClick={clearError}>
                    <img src={iconClose} alt="close" />
                </span>
            </PreviewContainer>
        )
    }   
}


