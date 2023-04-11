import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    padding: 5.6rem;
    width: 95%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
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
`

export const Buttons = styled.button`
    border: 0;
    background: transparent;
    display: flex;
    gap: 1.5rem;
`
    
export const DownloadCv = styled.button`
    background: #00DF5E;
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