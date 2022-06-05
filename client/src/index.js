import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk'
import {rootReducer} from "./redux/Reducers/rootReducer";
import {BrowserRouter} from "react-router-dom";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

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
    // (window.navigator.userAgent.includes('Chrome') && !window.navigator.userAgent.includes('Edg')) ?
    //         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose
))

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </DndProvider>
);

