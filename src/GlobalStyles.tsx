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

`