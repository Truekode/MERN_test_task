import React, {useEffect} from 'react';
import {Avatar, Card} from "antd";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";
import {localization} from "../localization";
import attractions from "../img/attractions.png";
import facts from "../img/facts.png";
import Meta from "antd/es/card/Meta";


const Home = () => {
    const router = useNavigate();
    const dispatch  = useDispatch();
    const {headerTitle, headerLocalization} = useSelector(state => state.app)


    useEffect(() => {
        dispatch(editHeader('headerTitleMain', false))
    }, [])
    return (
        <div className="App">
            <div className="main grid-container" >
                <Card className="task__item home__items" onClick={() => router(`/attractions`)}>
                    <Meta
                        avatar={<Avatar shape="square" size={50} src={attractions} />}
                        title={localization[headerLocalization].homePageAttraction}
                    />
                </Card>

                {/*<Card className="task__item home__items home__items-small" onClick={() => router(`/attractions`)}>*/}
                {/*    <Meta*/}
                {/*        avatar={<Avatar shape="square" size={50} src={facts} />}*/}
                {/*        title='Факты'*/}
                {/*    />*/}
                {/*</Card>*/}
                {/*<Card className="task__item main__attraction" onClick={() => router(`/attractions`)}>{localization[headerLocalization].homePageAttraction}</Card>*/}
            </div>

        </div>
    );
};

export default Home;