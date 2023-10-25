import React from 'react'
import ReactDOM from 'react-dom/client'
//initialized style
import "reset-css"
//style of UI

//global style
import "@/assets/styles/global.scss"

//style of components
import App from "./App";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
