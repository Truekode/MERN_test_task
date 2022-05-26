import React, {useEffect} from 'react';
import {Card} from "antd";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";
import {localization} from "../localization";


const Home = () => {
    const router = useNavigate();
    const dispatch  = useDispatch();
    const {headerTitle, headerLocalization} = useSelector(state => state.app)


    useEffect(() => {
        dispatch(editHeader('headerTitleMain', false))
    }, [])
    return (
        <div className="App">
            <div className="main" >
                <Card className="task__item main__attraction" onClick={() => router(`/attractions`)}>{localization[headerLocalization].homePageAttraction}</Card>
            </div>

        </div>
    );
};

export default Home;