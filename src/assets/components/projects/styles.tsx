import styled from "styled-components";

export const ContainerProjects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12.7rem;

    h2{
        margin-bottom: 3.0rem;
    }
`

export const ProjectsBox = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4.5rem;
`

export const Project = styled.div`
    width: 35.0rem;
    height: 24.0rem;
    background: var(--Bg-Dark);
    padding: 2.0rem 2.5rem;
    border: .1rem solid var(--Border);
`

export const infoProject = styled.div`
    display: grid;
    gap: .6rem;    
    margin-top: 2.3rem;

    span{
        font-weight: 500;
    }
    
    a {
        color: var(--White);
    }

    p{
        font-weight: 400;
        font-size: 1.4rem;
        color: var(--Secondary-Text-Color);
    }
`

export const ProjectImage = styled.div`
    width: 30.0rem;
    height: 13.0rem;
    background: #171717;
    margin-bottom: 2.3rem;

    img{
        width: 30.0rem;
        height: 13.0rem;
    }
`
