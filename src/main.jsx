import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {LoginContextProvider} from "./context/LoginContext"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginContextProvider>
    <BrowserRouter>
    <App />    
    </BrowserRouter>
    </LoginContextProvider>
  </React.StrictMode>
)
