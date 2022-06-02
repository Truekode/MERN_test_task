import React, {useEffect, useState} from 'react';
import {CheckCircleFilled, CloseCircleFilled} from "@ant-design/icons";
import {Button, Radio} from "antd";
import {editHeader} from "../redux/Actions/actions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const TestComponent = ({test}) => {
    const [testQuestionIndex, setTestQuestionIndex] = useState(0);
    const [successTest, setSuccessTest] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const dispatch  = useDispatch();
    const router = useNavigate();

    const handleChange = (e) => {
        if (test[testQuestionIndex].right === e.target.value) {
            setShowAlert('success')
            setTimeout(() => {
                setTestQuestionIndex(testQuestionIndex + 1);
                setShowAlert(false);
            }, 1500)
        } else {
            setShowAlert('error')
        }
    }

    useEffect(() => {
        if (testQuestionIndex === test.length - 1) {
            setSuccessTest(true)
        }
        // setSuccessTest(false)
        dispatch(editHeader('tasksPageTest', true))
    }, [showAlert, testQuestionIndex])

    return (
        <>
            {successTest
                ?   <div className="test__item">
                    <h2>Поздравляем с прохождением теста!!</h2>
                    <Button className="" type="primary" block onClick={() => {
                        setTestQuestionIndex(0)
                        router('/tests')
                    }}>Назад</Button>
                </div>
                : <>
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
            }
        </>
    );
};

export default TestComponent;