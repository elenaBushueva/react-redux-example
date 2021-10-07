import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";

const redusers = (state, action) => {
    console.log(state, action)

    if(action.type === 'PLUS'){
        return {
            ...state,
            count: state.count + 1
        }
    }

    if(action.type === 'MINUS'){
        return {
            ...state,
            count: state.count - 1
        }
    }

    return {
        count: 2,
        appVersion: '0.0.1'
    }
}


const store = createStore(redusers);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
