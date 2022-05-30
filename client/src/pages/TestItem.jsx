import React, {useEffect, useState} from 'react';
import {Button, Radio} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {editHeader} from "../redux/Actions/actions";
import {CheckCircleFilled, CloseCircleFilled} from "@ant-design/icons";

const test = [
    {
        question: 'Сколько букв в татарском алфавите?',
        answers: {
            A: '36',
            B: '39',
            C: '41',
            D: '37'
        },
        right: 'B',
        messageForCorrectAnswer: "Зиннәтле",
        messageForIncorrectAnswer: "В татарском алфавите 39 букв. Он включает в себя 33 буквы русского алфавита и 6 дополнителҗных букв: Әә, Өө, Үү, Җҗ, Ңң, Һһ. Данный порядок букв в алфавите был закреплен в январе 1997 г. постановлением Государственного Совета Республики Татарстан.",
        questionPic: ""

    }, {
        question: 'Какой знак препинания на татарском языке называют «өндәү билгесе»?',
        answers: {
            A: 'Точку',
            B: 'Точку с запятой',
            C: 'Вопросительный знак',
            D: 'Восклицательный знак'
        },
        right: 'D',
        messageForCorrectAnswer: "Егет",
        messageForIncorrectAnswer: "Ответ неверный, попробуй еще!",
        questionPic: ""
    }, {
        question: 'Найдите сказуемое в предложении «Китап өстәлдә ята»',
        answers: {
            A: 'Китап',
            B: 'В этом предложении нет сказуемого',
            C: 'Өстәлдә',
            D: 'Ята'
        },
        right: 'D',
        messageForCorrectAnswer: "Дөрес",
        messageForIncorrectAnswer: "Это предложение переводится как «Книга лежит на столе», а «ята» значит «лежит».",
        questionPic: ""
    },
    {
        question: 'Гласные в татарском языке бывают мягкие и твердые. В каком из слов буква «я» произносится в мягком варианте [йә]?',
        answers: {
            A: 'Яңгыр (дождь)',
            B: 'Ярдәм (помощь)',
            C: 'Кыяр (огурец)',
            D: 'Ялкын (искра)'
        },
        right: 'B',
        messageForCorrectAnswer: "Ярар дөрес!",
        messageForIncorrectAnswer: "Правильный ответ - «Ярдәм».",
        questionPic: ""

    },
    {
        question: 'А в каком из следующих слов все гласные относятся к типу твердых?',
        answers: {
            A: 'Үрдәк (утка)',
            B: 'Матур (красивый)',
            C: 'Зәңгәр (синий)',
            D: 'Әни (мама)'
        },
        right: 'B',
        messageForCorrectAnswer: "Зиннәтле",
        messageForIncorrectAnswer: "Во всех словах, кроме «Матур», гласные мягкие. Правильный ответ - «Матур»",
        questionPic: ""

    },
    {
        question: 'Сколько слогов в слове «күбәләк» (бабочка)?',
        answers: {
            A: 'Два',
            B: 'Три',
            C: 'Один',
            D: 'Четыре'
        },
        right: 'B',
        messageForCorrectAnswer: "Ярар дөрес!",
        messageForIncorrectAnswer: "Ответ неверный. Слово делится на три слога: кү-бә-ләк",
        questionPic: ""

    },
    {
        question: 'На эту букву в татарском языке не начинается ни одно слово',
        answers: {
            A: 'Ю',
            B: 'Ң',
            C: 'Ы',
            D: 'Ө'
        },
        right: 'B',
        messageForCorrectAnswer: "Дөрес",
        messageForIncorrectAnswer: "Ответ неверный! Правильный ответ — «ң». Из-за этого в татарском алфавите даже нет прописной формы этой буквы",
        questionPic: ""

    },
    {
        question: 'В каком из вариантов мы написали слово «лиса» на татарском языке правильно?',
        answers: {
            A: 'Телке',
            B: 'Төлкө',
            C: 'Тэлке',
            D: 'Төлке'
        },
        right: 'A',
        messageForCorrectAnswer: "Егет",
        messageForIncorrectAnswer: "Ответ неверный! Правильно писать «төлке», но из-за особенностей татарского произношения вам слышится [төлкө]",
        questionPic: ""

    },

]


const TestItem = () => {
    const [testQuestionIndex, setTestQuestionIndex] = useState(0);
    const [startTest, setStartTest] = useState(false);
    const [successTest, setSuccessTest] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        if (test[testQuestionIndex].right === e.target.value) {
            setShowAlert('success')
            setTimeout(() => {
                setTestQuestionIndex(testQuestionIndex + 1);
                setShowAlert(false);
            }, 3000)
        } else {
            setShowAlert('error')
        }
    }

    const dispatch  = useDispatch();
    const {headerLocalization} = useSelector(state => state.app)
    const router = useNavigate();

    useEffect(() => {
        dispatch(editHeader('tasksPageTest', true))
    }, [showAlert, testQuestionIndex])

    return (
        <div className="App">
            {startTest
                ? <>
                    {showAlert === 'error'
                        ? <div className="test__notification">
                            <div className="test__notification__content">
                                <CloseCircleFilled  style={{color: 'red',
                                    fontSize: '30px'}}/>
                                {test[testQuestionIndex].messageForIncorrectAnswer}
                                <Button className="" type="primary" block onClick={() => setShowAlert(false)}>Хорошо!</Button>

                            </div>
                        </div>
                        : <></>
                    }
                    {showAlert === 'success'
                        ? <div className="test__notification">
                            <div className="test__notification__content">
                                <CheckCircleFilled  style={{color: 'green',
                                    fontSize: '30px'}}/>
                                {test[testQuestionIndex].messageForCorrectAnswer}
                            </div>
                        </div>
                        : <></>
                    }
                    <div className="test__item">
                        <div className="test__status">{testQuestionIndex + 1} из {test.length}</div>
                        <div key={test[testQuestionIndex].question} className="test__question">
                            <h2>{test[testQuestionIndex].question}</h2>
                            <div className="test__answers">
                                <Radio.Group className="test__answers__wrp" onChange={(e) => {
                                    handleChange(e)
                                }}>
                                    {Object.keys(test[testQuestionIndex].answers).map(key =>
                                        <Radio key={key} value={key}>{test[testQuestionIndex].answers[key]}</Radio>
                                    )}
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                </>
                : <div className="test__item">
                    <h2>Глаголы</h2>
                    <div>
                        Глаголы как слова, выражающие процесс и имеющий многочисленные формы и богатое содержание, играют большую роль в построении правильной литературной речи. Проверьте свои знания о глаголах в этом тесте.
                    </div>
                    <Button className="" type="primary" block onClick={() => setStartTest(true)}>Начать тест</Button>
                </div>
            }
            {successTest
                ?   <div className="test__item">
                    <h2>Поздравляем с прохождением теста!!</h2>
                    <Button className="" type="primary" block onClick={() => setStartTest(true)}>Назад</Button>
                </div>
                : <></>
            }
        </div>
    );
};

export default TestItem;