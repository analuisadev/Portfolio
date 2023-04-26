import styled from 'styled-components'

export const Menu = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    padding: 3.5rem;
    width: 100%;
    top: 0;
    span{
        font-size: 2.6rem;
    }

    nav ul{
        display: flex;
        gap: 4.5rem;
        list-style: none;
        font-weight: 400;   
        align-items: center;
    }

    a {
        color: var(--Primary-Text-Color);
    }

    li {
        position: relative;
    }

    li::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: .2rem;
        background: var(--Cyan);
        transition: width .3s ease-out;
        transform: translateY(.6rem);
    }

    li:hover::after {
        width: 100%;
    }

    @media screen and (max-width: 830px) {
        nav ul {
            display: none;
        }
    }
`