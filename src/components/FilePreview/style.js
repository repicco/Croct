import styled from 'styled-components'

export const PreviewContainer = styled.section`
    background: ${({ theme }) => theme.back};
    max-width: 553px;
    max-height: 177px;
    border-radius: 8px;
    padding: 32px;
    position: relative;
    display: flex;
    align-items: center;
    span {
        position: absolute;
        top: 32px;
        right: 32px;
        font-weight: bold;
        cursor: pointer;
    }
`

export const PreviewImgArea = styled.div`
    width: 113px;
    height: 113px;
    background: ${({ theme }) => theme.high};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ borderRadius }) => borderRadius};
    img {
    max-width: 100%;
    max-height: 100%;
    border-radius: ${({ borderRadius }) => borderRadius};
    }
`

export const PreviewImg = styled.img`
    width: 113px;
    height: 113px;
    background: ${({ theme }) => theme.high};
    border-radius: ${({ borderRadius }) => borderRadius};
`

export const PreviewText = styled.div`
    margin-left: 32px;
    h1 {
        font-size: 1rem;
        font-weight: 400;
        color: ${({ h1Color, theme }) => h1Color === 'warn' ? theme.warn : theme.text};
    }
    input {
        margin-top: 13px;
        width: 276px;
        height: 2px;
    }
    h2 {
        font-size: 0.8rem;
        font-weight: 400;
        color: ${({ theme }) => theme.text};
        margin: 6px;
    }
    p {
        font-size: 1rem;
        font-weight: 500;
        text-decoration: underline;
        margin-top: 12px;
        cursor: pointer;
    }
`

export const PreviewBtn = styled.div`
    margin-top: 35px;
    width: 276px;
    display: flex;
    justify-content: flex-end;
    button {
        padding: 10px 35px;
        background: ${({ theme }) => theme.link};
        border: 1px solid ${({ theme }) => theme.link};
        color: white;
        border-radius: 16px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        &:hover {
            color: ${({ theme }) => theme.link};
            background-color: transparent;
        }
    }
`