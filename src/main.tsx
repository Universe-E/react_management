import React from 'react'
import ReactDOM from 'react-dom/client'
//initialized style
import "reset-css"
//style of UI

//global style
import "@/assets/styles/global.scss"

//style of components
//substitute App with Router
import {BrowserRouter} from "react-router-dom";
import App from "@/App.tsx";

//state manage
import {Provider} from "react-redux";
import store from "@/store";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
