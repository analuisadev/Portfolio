import styled from 'styled-components'

export const Menu = styled.header`
    
    display: flex;
    justify-content: space-between;
    padding: 3.5rem;
    align-items: center;

    span{
        font-size: 2.6rem;
        font-weight: 700;
    }

    nav ul{
        display: flex;
        gap: 4.5rem;
        list-style: none;
        font-size: 1.8rem;
    }

    a {
        text-decoration: none;
        color: var(--Primary-Text-Color);
    }
`