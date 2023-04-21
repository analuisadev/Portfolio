import styled from "styled-components";

export const WorkTool = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 18.1rem;
    h2 {
        margin-bottom: 3.0rem;
    }
`

export const ListOfTools = styled.div`
    display: flex;
    gap: 5.1rem;
    width: fit-content;
    justify-content: center;

    @media screen and (max-width: 1366px){
        display: grid;
        grid-template-rows: max-content;
        place-items: center;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 2.1rem;
    }   

    @media screen and (max-width: 636px){
        grid-template-columns: 1fr 1fr;
    }
`

export const Tool = styled.div`
    width: 15.0rem;
    height: 15.0rem;
    background: var(--Bg-Dark);
    border: .1rem solid var(--Border-Button);
    display: grid;
    place-items: center;

    img {
        width: 9.0rem;
        height: 9.0rem;
    }
`
