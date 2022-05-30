import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";
import Meta from "antd/es/card/Meta";
import {Avatar, Card} from "antd";
import facts from "../img/facts.png";
import {useNavigate} from "react-router-dom";

const test = [
    {
        question: 'Здесь вопрос',
        answers: {
            A: 'Ответ 1',
            B: 'Ответ 2',
            C: 'Ответ 3',
            D: 'Ответ 4'
        },
        right: 'B',
        messageForCorrectAnswer: "Correct answer. Good job.",
        messageForIncorrectAnswer: "Incorrect answer. Please try again.",
        questionPic: ""

    }, {
        question: 'Здесь вопрос',
        answers: {
            A: 'Ответ 1',
            B: 'Ответ 2',
            C: 'Ответ 3',
            D: 'Ответ 4'
        },
        right: 'A',
        messageForCorrectAnswer: "Correct answer. Good job.",
        messageForIncorrectAnswer: "Incorrect answer. Please try again.",
        questionPic: ""
    }
]

const AlphabetTest = () => {
    const dispatch  = useDispatch();
    const {headerLocalization} = useSelector(state => state.app)
    const router = useNavigate();

    useEffect(() => {
        dispatch(editHeader('alphabetTestPage', true))
    }, [])

    return (
        <div className="App">

        </div>
    );
};

export default AlphabetTest;