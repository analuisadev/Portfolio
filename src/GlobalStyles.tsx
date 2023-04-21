import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

::-webkit-scrollbar-track {
    background-color: #232C3B;
}

::-webkit-scrollbar {
    width: 7px;
    background: #F4F4F4;
}

::-webkit-scrollbar-thumb {
    background: #1202f1;
    border-radius: 15px;
}

:root {
    --Bg-Body: #121216;
    --Primary-Text-Color: #F9F9F9;
    --Secondary-Text-Color: #828282;
    --Border-Button: #333333;
    --Bg-Dark: #212121;
    --Cyan: #00FFFF;
    --White: #FFFFFF;
    font-size: 62.5%;
}

html {
    scroll-behavior: smooth;
    overflow-x: hidden;
}

body {
    font-family: 'DM Sans', sans-serif;
    color: var(--Primary-Text-Color);
    font-size: 1.6rem;
    background: var(--Bg-Body);
    height: 100vh;
    min-width: 100vw;
    align-items: center;
    position: relative;
}

a { 
    text-decoration: none;
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