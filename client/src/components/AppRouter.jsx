import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import {useSelector} from "react-redux";
import Register from "../pages/Register";

const AppRouter = () => {
    const {auth} = useSelector(state => state.app)

    return (
        auth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Home/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Login/>}/>
            </Routes>
    );
};

export default AppRouter;