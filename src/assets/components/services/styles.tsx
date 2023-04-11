import styled from "styled-components";

export const AboutServices = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3.0rem;

    h2{
        font-weight: 700;
        font-size: 3.2rem;
    }
`

export const TypesOfServices = styled.div`
    display: flex;
    gap: 4.5rem;

`
export const Service = styled.div`
   width: 35.0rem;
   height: 18.0rem;
   background: var(--Bg-Dark); 
   border-bottom: .1rem solid var(--Green);
   padding: 2.5rem;
`
export const InfoService = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    p{
        color: var(--Secondary-Text-Color);
        font-weight: 500;
        font-size: 1.8rem;
        width: 12.6rem;
    }
`

