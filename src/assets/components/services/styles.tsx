import styled from "styled-components";

export const AboutServices = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3.0rem;
`

export const TypesOfServices = styled.div`
    display: flex;
    gap: 4.5rem;

`
export const Service = styled.div`
   width: 35.0rem;
   height: 18.0rem;
   background: var(--Bg-Dark);
   border: .1rem solid var(--Border-Button);
   border-bottom: .1rem solid var(--Cyan);
   padding: 2.5rem;
`
export const InfoService = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    p{
        color: var(--Secondary-Text-Color);
        font-weight: 500;
        width: 12.6rem;
    }
`

