import React, {useEffect} from 'react';
import Letters from "../components/UI/Letters/Letters";
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";
import audio from '../audio/1.mp3';
const letters = ['А', 'Ә', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'Җ', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'Ң', 'О', 'Ө', 'П', 'Р', 'С', 'Т', 'У', 'Ү', 'Ф', 'Х', 'Һ', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']

const AlphabetLetters = () => {
    const dispatch  = useDispatch();
    const {headerLocalization} = useSelector(state => state.app)

    useEffect(() => {
        dispatch(editHeader('tasksPageAlphabet', true))
    }, [])
    const playAudio = () => {
        new Audio(audio).play();
    }
    return (
        <div className="App Letters">
            <div className="letters__wrapper">
                {letters.map(letter => <Letters letter={letter} playAudio={playAudio}/>)}

            </div>
        </div>
    );
};

export default AlphabetLetters;