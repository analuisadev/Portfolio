import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    padding: 5.6rem;
    width: 95%;
    margin: auto;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 780px) {
        width: fit-content;
    }

    @media screen and (max-width: 720px) {
        img {
            display: none;
        }
    }
`

export const MyIntroduction = styled.div`
    display: grid;
    gap: 1.8rem;

    h1{
        font-size: 3.6rem;
        width: 22.1rem;
    }

    p{
        color: var(--Secondary-Text-Color);
        font-weight: 500;
    }

    @media screen and (max-width: 720px) {
       h1, p {
            width: 100%;
            text-align: center;
       }
    }
`
export const Buttons = styled.button`
    border: 0;
    background: transparent;
    display: flex;
    gap: 1.5rem;

    @media screen and (max-width: 720px) {
        justify-content: center;
    }
`
    
export const DownloadCv = styled.button`
    background: var(--Cyan);
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1.2rem 2.7rem;
    border: 0;
    cursor: pointer;
`

export const ContactMe = styled(DownloadCv)`
    background: transparent;
    border: .1rem solid var(--Border-Button);
    color: var(--Primary-Text-Color);
`