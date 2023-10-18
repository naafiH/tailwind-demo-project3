import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from "./components/nav/nav"
import Body from "./components/body/body"
import Footer from "./components/footer/footer"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Nav/>
    <Body/>
    <Footer/>
  </React.StrictMode>,
)
