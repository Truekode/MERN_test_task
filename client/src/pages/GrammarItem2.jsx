import React, {useEffect, useState} from 'react';
import Letters from "../components/UI/Letters/Letters";
import {audio} from "../public/audioLetters";
import {Button, Table} from "antd";
import TestComponent from "../components/TestComponent";
import Word from "../components/UI/Word/Word";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {editHeader} from "../redux/Actions/actions";
const letters = ["Аа [а]", "Әә [ә]", "Бб [б]", "Вв [w]", "Гг [гъ]", "Дд [д]", "Ее [йе]", "Ёё [ё]", "Жж [ж]", "Җҗ [җ]", "Зз [з]", "Ии [и]", "Йй [й]", "Кк [к]", "Лл [л]", "Мм [м]", "Нн [н]", "Ңң [ң]", "Оо [о]", "Өө [ө]", "Пп [п]", "Рр [р]", "Сс [с]", "Тт [т]", "Уу [у]", "Үү [ү]", "Фф [ф]", "Хх [х]", "Һһ [һ]", "Цц [ц]", "Чч [ч]", "Шш [ш]", "Щщ [щ]", "Ъ [Ъ]", "Ыы [ы]", "Ь [Ь]", "Ээ [э]", "Юю [йү]", "Яя [йә]"]


const grammarLesson = [
    {
        id: 1,
        title: 'Давайте познакомимся!' +
                'Әйдәгез танышабыз!',
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

const GrammarItem2 = () => {
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
                    <div className="lesson__text">
                        Для приветствия в татарском языке используется слово
                    </div>
                    <Word word="Сәлам! – Привет!"/>
                    <Word word="Исәнме! – Здравствуй!"/>
                    <Word word="Исәнмесез! – Здравствуйте!"/>
                    <div className="lesson__text">Посмотри какие слова используется при знакомстве!</div>
                    <div className="lesson__word">
                        <Word word="Мин – Я"/>
                        <Word word="Син – Ты"/>
                        <Word word="Ул – Он"/>
                    </div>
                    <div className="lesson__text">Прочитай диалог и попробуй запомнить как происходит знакомства!</div>
                    <div style={{width: '90%'}}>Диалог: </div>
                    <ul className="lesson__dialog">
                        <li>Сәлам! Син кем?</li>
                        <li>Сәлам! Мин - Костя. Ә син кем?</li>
                        <li>Мин – Азат.</li>
                    </ul>
                    <div style={{width: '90%'}}>Перевод: </div>
                    <ul className="lesson__dialog">
                        <li>Привет! Ты кто?</li>
                        <li>Привет! Я - Костя. А ты кто?</li>
                        <li>Я – Азат.</li>
                    </ul>
                    {/*<Button className="" type="primary" block onClick={() => setStartTest(true)}>Проверить себя</Button>*/}
                </div>
                </>
            }
        </div>
    );
};

export default GrammarItem2;