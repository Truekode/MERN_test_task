import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";
import {Avatar, Card} from "antd";
import alphabet from "../img/alphabet.png";
import {localization} from "../localization";
import {useNavigate} from "react-router-dom";
import Meta from "antd/es/card/Meta";

const Alphabet = () => {
    const dispatch  = useDispatch();
    const router = useNavigate();
    const {headerLocalization} = useSelector(state => state.app)

    useEffect(() => {
        dispatch(editHeader('tasksPageAlphabet', true))
    }, [])

    return (
        <div className="App">
            <Card className="task__item" onClick={() => router(`/alphabet/letters`)}>
                <Meta
                    avatar={<Avatar shape="square" size={64} src={alphabet} />}
                    title={localization[headerLocalization].alphabet.alphabetPage}
                    // description={localization[headerLocalization].tasksPageAlphabetDescription}
                />
            </Card>
            <Card className="task__item" onClick={() => router(`/alphabet/learn`)}>
                <Meta
                    avatar={<Avatar shape="square" size={64} src={alphabet} />}
                    title={localization[headerLocalization].alphabet.learnPage}
                    // description={localization[headerLocalization].tasksPageAlphabetDescription}
                />
            </Card>
            <Card className="task__item" onClick={() => router(`/alphabet/test`)}>
                <Meta
                    avatar={<Avatar shape="square" size={64} src={alphabet} />}
                    title={localization[headerLocalization].alphabet.testPage}
                    // description={localization[headerLocalization].tasksPageAlphabetDescription}
                />
            </Card>
        </div>
    );
};

export default Alphabet;