import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --Bg-Body: #171717;
    --Primary-Text-Color: #F9F9F9;
    --Secondary-Text-Color: #828282;
    --Border-Button: #333333;
    --Bg-Dark: #212121;
    --Green: #00df5e;
    --White: #FFFFFF;
    font-size: 62.5%;
}

body {
    font-family: 'DM Sans', sans-serif;
    color: var(--Primary-Text-Color);
    font-size: 1.6rem;
    background: var(--Bg-Body);
    height: 100vh;
    max-width: 100vw;
}

a{ 
    text-decoration: none;
}

a:hover{
    opacity: .8;
}

h1, 
h2{
    font-size: 3.2rem;
    font-weight: 700;
}

span {
    font-weight: 700;
}

p, 
span, 
nav ul{
    font-size: 1.8rem;
}
`