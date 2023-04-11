import { Header } from './assets/components/header/Header'
import { GlobalStyle } from './GlobalStyles'
import { Introduction } from './assets/components/introduction/Introduction'
import { About } from './assets/components/about/About'

import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Introduction />
    <About />
  </React.StrictMode>,
)
