import styled from "styled-components"

export const UploadContainer = styled.section`
    background: ${({ theme }) => theme.back};
    max-width: 553px;
    height: 177px;
    border-radius: 8px;
    padding: 32px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 2px dashed ${({ theme }) => theme.border};
    margin: 25px;
    cursor: pointer;
    p {
        width: 100%;
        font-size: 14px;
        color: ${({ theme }) => theme.text};
        text-align: center;
    }
    input, input::-webkit-file-upload-button {
        border: none;
        background: transparent;
        color: transparent;
        width: 0;
    }
    input::-webkit-file-upload-button {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
`

export const UploadTextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`

export const UploadTitle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    img {
        width: 16px;
        height: 12px;
        margin-right: 12px;
    }
    h1 {
        font-size: 14px;
        color: ${({ theme }) => theme.title};
        font-weight: 500;
    }
`