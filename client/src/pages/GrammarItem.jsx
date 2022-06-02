import React, {useEffect, useState} from 'react';
import Letters from "../components/UI/Letters/Letters";
import {audio} from "../public/audioLetters";
import {Button, Table} from "antd";
import Word from "../components/UI/Word/Word";
import TestComponent from "../components/TestComponent";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {editHeader} from "../redux/Actions/actions";
const letters = ["Аа [а]", "Әә [ә]", "Бб [б]", "Вв [w]", "Гг [гъ]", "Дд [д]", "Ее [йе]", "Ёё [ё]", "Жж [ж]", "Җҗ [җ]", "Зз [з]", "Ии [и]", "Йй [й]", "Кк [к]", "Лл [л]", "Мм [м]", "Нн [н]", "Ңң [ң]", "Оо [о]", "Өө [ө]", "Пп [п]", "Рр [р]", "Сс [с]", "Тт [т]", "Уу [у]", "Үү [ү]", "Фф [ф]", "Хх [х]", "Һһ [һ]", "Цц [ц]", "Чч [ч]", "Шш [ш]", "Щщ [щ]", "Ъ [Ъ]", "Ыы [ы]", "Ь [Ь]", "Ээ [э]", "Юю [йү]", "Яя [йә]"]


const grammarLesson = [
    {
        id: 1,
        title: 'Татарский алфавит.',
        subtitle: 'Он составлен на основе русской графики, состоит из 39 букв',
        text1: ''

    }
]

const test = [
    {
        question: 'Какие новые татарские добавили буквы к русскому алфавиту?',
        answers: {
            A: 'ә, ө, җ, ү',
            B: 'ә, ө, җ, ң, һ',
            C: 'ө, җ, ң, һ',
            D: 'ә, ө, ү, җ, ң, һ'
        },
        right: 'D',
        messageForCorrectAnswer: "Зиннәтле",
        messageForIncorrectAnswer: "В татарском алфавите 39 букв. Он включает в себя 33 буквы русского алфавита и 6 дополнителҗных букв: Әә, Өө, Үү, Җҗ, Ңң, Һһ.",
        questionPic: ""

    }, {
        question: 'Сколько гласных звуков (фонем) в татарском языке?',
        answers: {
            A: 'а-ә, у-ү, ы-е, о-ө',
            B: 'а-ә, ы-е, о-ө',
            C: 'а-ә, ы-е, у-ү',
            D: 'а-ә, у-ү, о-ө'
        },
        right: 'A',
        messageForCorrectAnswer: "Егет",
        messageForIncorrectAnswer: "Ответ неверный, попробуй еще!",
        questionPic: ""
    },
]

const GrammarItem = () => {
    const [startTest, setStartTest] = useState(false);
    const dispatch  = useDispatch();
    const {headerLocalization} = useSelector(state => state.app)
    const router = useNavigate();

    useEffect(() => {
        dispatch(editHeader('tasksPageGrammar', true))
    }, [])
    return (
        <div className="App">
            {startTest
                ? <>
                    <TestComponent test={test}/>
                    <div className="test__item">
                        <Button className="" type="primary" block onClick={() => setStartTest(false)}>Назад к лекции</Button>
                    </div>
                </>
                : <><div className="lesson__wrp">
                    <h2 className="lesson__title">{grammarLesson[0].title}</h2>
                    <div className="lesson__text">Начнем обучение с татарского алфавита. Он составлен на основе русской графики и состоит из <strong>39</strong> букв.</div>
                    <div className="letters__wrapper">
                        {letters.map((letter, index) => <Letters key={letter} letter={letter} onClick={() => {
                            new Audio(audio.letters[index]).play();
                        }}/>)}
                    </div>
                    <div className="lesson__text">
                        Заметьте, что к русскому алфавиту добавлено 6 знаков, обозначающих специфические звуки татарского языка <strong>(ə, Ө, Ү, Җ, ң, Һ)</strong>.
                        В татарском языке <strong>9</strong> гласных звуков (фонем), различающих смысл слов и форм. Они составляют твердую и мягкую пары: <strong>а-ə, у-Ү, ы-е, о-Ө.</strong>
                    </div>
                    <Button className="" type="primary" block onClick={() => setStartTest(true)}>Проверить себя</Button>
                </div>
                </>
            }
        </div>
    );
};

export default GrammarItem;