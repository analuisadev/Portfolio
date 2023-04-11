import { Header } from './assets/components/header/Header'
import { GlobalStyle } from './GlobalStyles'
import { Introduction } from './assets/components/introduction/Introduction'
import { About } from './assets/components/about/About'
import { Projects } from './assets/components/projects/Projects'
import { Services } from './assets/components/services/Services'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Skills } from './assets/components/skills/Skills'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Introduction />
    <About />
    <Projects />
    <Services />
    <Skills />
  </React.StrictMode>,
)
