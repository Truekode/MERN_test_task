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
import AlphabetLearn from "../pages/AlphabetLearn";
import AlphabetLetters from "../pages/AlphabetLetters";
import AlphabetTest from "../pages/AlphabetTest";
import Tests from "../pages/Tests";
import TestItem from "../pages/TestItem";
import Grammar from "../pages/Grammar";
import GrammarItem from "../pages/GrammarItem";
import GrammarItem3 from "../pages/GrammarItem3";
import GrammarItem2 from "../pages/GrammarItem2";
import GrammarItem4 from "../pages/GrammarItem4";
import Recepts from "../pages/Recepts";
import ReceptsItem from "../pages/ReceptsItem";


export const privateRoutes = [
    {path: '/profile', component: <Profile/>, exact: true},
    {path: '/tasks', component: <Tasks/>, exact: true},
    {path: '/home', component: <Home/>, exact: true},
    {path: '/dictionary', component: <Dictionary/>, exact: true},
    {path: '/learn', component: <Learn/>, exact: true},
    {path: '/tests', component: <Tests/>, exact: true},
    {path: '/grammar', component: <Grammar/>, exact: true},
    {path: '/grammar/1', component: <GrammarItem/>, exact: true},
    {path: '/grammar/2', component: <GrammarItem2/>, exact: true},
    {path: '/grammar/3', component: <GrammarItem3/>, exact: true},
    {path: '/grammar/4', component: <GrammarItem4/>, exact: true},
    {path: '/tests/:id', component: <TestItem/>, exact: true},
    {path: '/constructor', component: <Constructor/>, exact: true},
    {path: '/alphabet', component: <Alphabet/>, exact: true},
    {path: '/recipes', component: <Recepts/>, exact: true},
    {path: '/recipes/:id', component: <ReceptsItem/>, exact: true},
    {path: '/attractions', component: <Attractions/>, exact: true},
    {path: '/attraction/:id', component: <AttractionItem/>, exact: true},
    {path: '/attractions3D/:id', component: <Attraction3D/>, exact: true},
    {path: '/alphabet/letters', component: <AlphabetLetters/>, exact: true},
    {path: '/alphabet/learn', component: <AlphabetLearn/>, exact: true},
    {path: '/alphabet/test', component: <AlphabetTest/>, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, exact: true},
    {path: '/registration', component: <Register/>, exact: true},
]