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
`

export const Social = styled.div`
    display: flex;
    gap: 18.6rem;
    align-items: center;
    justify-content: center;   
`

export const SocialContainer = styled.div`
    display: grid;
    gap: .8rem;
    margin-top: 10.5rem;
    place-items: center;
    text-align: center;
    
    p{
        font-weight: 400;
        font-size: 1.6rem;
        color: var(--Secondary-Text-Color);
    }
`