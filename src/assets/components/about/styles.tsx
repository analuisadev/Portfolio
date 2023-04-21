import styled from 'styled-components'

export const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.0rem;
    text-align: center;
    margin-top: 18.1rem;
   
    p{
        font-weight: 400;
        line-height: 3.2rem;
        color: var(--Secondary-Text-Color);
        width: 74.5rem;
    }

    @media screen and (max-width: 720px) {
        p {
            width: fit-content;
        }
    }

    @media screen and (max-width: 360px) {
        p {
            width: 80%;
        }
    }
`

export const Social = styled.div`
    display: flex;
    gap: 18.6rem;
    align-items: center;
    justify-content: center;   

    @media screen and (max-width: 1300px) {
        display: grid;
        grid-template-rows: max-content;
        grid-template-columns: 1fr 1fr 1fr;
        gap: .8rem;
    }

    @media screen and (max-width: 364px){
        grid-template-columns: 1fr;
    }
` 

export const SocialContainer = styled.div`
    display: grid;
    gap: .8rem;
    margin-top: 10.5rem;
    place-items: center;
    text-align: center;
    transition: all .5s;
    
    &:hover  {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    
    p{
        font-weight: 400;
        font-size: 1.6rem;
        color: var(--Secondary-Text-Color);
    }
`