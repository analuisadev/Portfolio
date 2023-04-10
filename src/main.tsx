import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './assets/components/header/Header'
import { GlobalStyle } from './GlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Header/>
  </React.StrictMode>,
)
