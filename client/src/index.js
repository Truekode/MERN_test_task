import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk'
import {rootReducer} from "./redux/Reducers/rootReducer";
import {BrowserRouter} from "react-router-dom";
//
// if (window.navigator.userAgent.includes('Chrome')) {
//     var store = createStore(rootReducer,
//         compose(
//             applyMiddleware(
//                 routerMiddleware(browserHistory)
//             ),
//             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//         )
//     );
// } else {
//     var store = createStore(rootReducer,
//         compose(
//             applyMiddleware(
//                 routerMiddleware(browserHistory)
//             )
//         )
//     );
// }

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    (window.navigator.userAgent.includes('Chrome') && !window.navigator.userAgent.includes('Edg')) ?
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose
))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
