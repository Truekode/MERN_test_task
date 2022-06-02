import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";
import {useNavigate} from "react-router-dom";

const AlphabetTest = () => {
    const dispatch  = useDispatch();
    const [word, setWord] = useState('');
    const {headerLocalization} = useSelector(state => state.app)

    useEffect(() => {
        dispatch(editHeader('alphabetTestPage', true))
    }, [])

    return (
        <div className="App">
            <div className="alphabet__test">
                <h2>Составь слово из предложенных букв</h2>
                <div>{word}</div>
            </div>
        </div>
    );
};

export default AlphabetTest;