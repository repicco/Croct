import React, { useState } from "react";

import iconWarning from '../../assets/iconWarning.png'
import iconClose from '../../assets/iconClose.png'

import {PreviewContainer, PreviewImgArea, PreviewImg, PreviewText, PreviewBtn} from './style'

export default function AvatarPreview({file, functions, error}){
    const [range, setRange] = useState(4)

    if(!error?.show){
        return (
            <PreviewContainer>
                {
                    file && (
                        <PreviewImg borderRadius={range} src={URL.createObjectURL(file)} alt="image" data-cy={file.name.replace('.', '_')} />
                      )
                }
                <PreviewText>
                    <h1>Crop</h1>
                    <input type="range" value={range} onChange={(ev) => setRange(ev.target.value)} min={4} max={50}/>
                    <PreviewBtn>
                        <button type="button" onClick={() => functions.saveFile(range)}>Save</button>
                    </PreviewBtn>
                </PreviewText>
                <span onClick={functions.clearError}>
                    <img src={iconClose} alt="close" />
                </span>
            </PreviewContainer>
        )
    } else {
        return (
            <PreviewContainer>
                <PreviewImgArea>
                    <img src={iconWarning} alt="warning"  />
                </PreviewImgArea>
                <PreviewText h1Color={'warn'}>
                    <h1>Sorry, the upload failed</h1>
                    <h2>{error.message}</h2>
                    <p onClick={functions.clearError}>Try again</p>
                </PreviewText>
                <span onClick={functions.clearError}>
                    <img src={iconClose} alt="close" />
                </span>
            </PreviewContainer>
        )
    }   
}


