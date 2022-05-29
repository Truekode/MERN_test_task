import React, {useEffect, useState} from 'react';
import {Card} from "antd";
import {useDispatch, useSelector} from "react-redux";
import success from '../img/success.webp'
import error from '../img/error.webp'
import {editHeader} from "../redux/Actions/actions";


const Learn = () => {
    const dispatch  = useDispatch();

    const words = useSelector(state => state.learnWords.words);
    const [successLearn, setSuccessLearn] = useState(false)
    const [errorLearn, setErrorLearn] = useState(false)
    const [wordIndex, setWordIndex] = useState(0)
    const [actionWord, setActionWord] = useState(words[0])

    function goNext() {
        if (wordIndex !== words.length - 1) {
            setWordIndex(wordIndex + 1);
            return;
        }
        setWordIndex(0)
    }

    useEffect(() => {
        dispatch(editHeader('tasksPageLearnWords', true))
        setActionWord(words[wordIndex]);
    }, [wordIndex])

    function checkWord(word, status) {
        if (word.status === status) {
            goNext()
            setSuccessLearn(true);
            setTimeout(() => setSuccessLearn(false), 1000);
        } else {
            setErrorLearn(true);
            setTimeout(() => setErrorLearn(false), 1000);
        }
    }

    return (
        <div className="App">
            {successLearn
                ?   <div className="notification__success">
                    <img src={success} alt=""/>
                </div>
                : <>
                    {errorLearn
                        ? <div className="notification__success">
                            <img src={error} alt=""/>
                        </div>
                        : <></>
                    }
                </>
            }
            <div className="learn container">
                <Card className="learn__card" >
                    <p>{actionWord.title} - {actionWord.translate}</p>
                </Card>
                <div className="learn__wrp">
                    <div className="learn__btn learn__btn-success" onClick={() => checkWord(actionWord, true)}>Верно</div>
                    <div className="learn__btn learn__btn-error" onClick={() => checkWord(actionWord, false)}>Не верно</div>
                </div>
            </div>
        </div>
    );
};

export default Learn;