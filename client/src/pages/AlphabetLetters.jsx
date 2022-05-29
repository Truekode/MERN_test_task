import React, {useEffect} from 'react';
import Letters from "../components/UI/Letters/Letters";
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";
// import audioLetters from '../audioLetters/1.mp3';
// import audioLetters from '../public/audioLetters/';
import {audio} from "../public/audioLetters";
const letters = ['А', 'Ә', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'Җ', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'Ң', 'О', 'Ө', 'П', 'Р', 'С', 'Т', 'У', 'Ү', 'Ф', 'Х', 'Һ', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']

const AlphabetLetters = () => {
    const dispatch  = useDispatch();
    const {headerLocalization} = useSelector(state => state.app)

    useEffect(() => {
        dispatch(editHeader('alphabetPage', true))
    }, [])

    return (
        <div className="App Letters">
            <div className="letters__wrapper">
                {letters.map((letter, index) => <Letters key={letter} letter={letter} playAudio={() => {
                    new Audio(audio.letters[index]).play();
                }}/>)}

            </div>
        </div>
    );
};

export default AlphabetLetters;