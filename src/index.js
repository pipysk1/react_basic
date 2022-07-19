import React, {StrictMode} from "react"
import ReactDOM from "react-dom"
import "./styles/global.scss"
import App from "./views/App"
import reportWebVitals from "./reportWebVitals"
import {Provider} from 'react-redux';
import {createStore} from "redux";
import rootReducer from "./store/reducers/rootReducer";

const reduxStore=createStore(rootReducer);

const root = document.getElementById('root')
ReactDOM.render(
    <StrictMode>
        <Provider store={reduxStore}>
            <App/>
        </Provider>
    </StrictMode>
    , root)
// <App />


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
