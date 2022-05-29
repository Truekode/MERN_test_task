import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";
import {Card} from "antd";
import {localization} from "../localization";
import {useNavigate} from "react-router-dom";

const Alphabet = () => {
    const dispatch  = useDispatch();
    const router = useNavigate();
    const {headerLocalization} = useSelector(state => state.app)

    useEffect(() => {
        dispatch(editHeader('tasksPageAlphabet', true))
    }, [])

    return (
        <div className="App">
            <Card className="task__item main__attraction" onClick={() => router(`/alphabet/letters`)}>
                {localization[headerLocalization].alphabet.alphabetPage}
            </Card>
            <Card className="task__item main__attraction" onClick={() => router(`/alphabet/learn`)}>
                {localization[headerLocalization].alphabet.learnPage}
            </Card>
            <Card className="task__item main__attraction" onClick={() => router(`/alphabet/test`)}>
                {localization[headerLocalization].alphabet.testPage}
            </Card>
        </div>
    );
};

export default Alphabet;