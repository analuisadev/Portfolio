import styled from "styled-components";

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 12.7rem;

    h2 {
        margin-bottom: 3.0rem;
    }
`

export const ListOfSkills = styled.div`
    display: flex;
    gap: 5.1rem;
    width: fit-content;
    @media screen and (max-width: 1786px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 2.1rem;
    }

    @media screen and (max-width: 920px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 560px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const Skill = styled.div`
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
