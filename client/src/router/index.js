import Profile from "../pages/Profile";
import Tasks from "../pages/Tasks";
import React from "react";
import Login from "../pages/Login";
import Dictionary from "../pages/Dictionary";
import Learn from "../pages/Learn";
import Home from "../pages/Home";
import Constructor from "../pages/Constructor";
import Attractions from "../pages/Attractions";
import AttractionItem from "../pages/AttractionItem";
import Attraction3D from "../pages/Attraction3D";
import Alphabet from "../pages/Alphabet";
import Register from "../pages/Register";

export const privateRoutes = [
    {path: '/profile', component: <Profile/>, exact: true},
    {path: '/tasks', component: <Tasks/>, exact: true},
    {path: '/home', component: <Home/>, exact: true},
    {path: '/dictionary', component: <Dictionary/>, exact: true},
    {path: '/learn', component: <Learn/>, exact: true},
    {path: '/constructor', component: <Constructor/>, exact: true},
    {path: '/alphabet', component: <Alphabet/>, exact: true},
    {path: '/attractions', component: <Attractions/>, exact: true},
    {path: '/attraction/:id', component: <AttractionItem/>, exact: true},
    {path: '/attractions3D/:id', component: <Attraction3D/>, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, exact: true},
    {path: '/registration', component: <Register/>, exact: true},
]