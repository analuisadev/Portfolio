import styled from 'styled-components'

export const Menu = styled.header`
    display: flex;
    position: fixed;
    padding: 3.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    span{
        font-size: 2.6rem;
    }

    nav ul{
        display: flex;
        gap: 4.5rem;
        list-style: none;
        font-weight: 400;   
    }

    a {
        color: var(--Primary-Text-Color);
    }

    @media screen and (max-width: 560px) {
        nav ul {
            display: none;
        }
    }
`

export const MenuHamburguer = styled.div``