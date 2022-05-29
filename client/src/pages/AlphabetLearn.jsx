import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";
import {alphabetImg} from "../public/alphabetImg";
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import {Button} from "antd";
import {audio} from "../public/audioLetters";

const letters = [
    {letter: 'Аа', transcription: '[а]',  img: 'img', example: 'Авыз - Рот'},
    {letter: 'Әә', transcription: '[ә]',  img: 'img', example: 'Әби - Бабушка'},
    {letter: 'Бб', transcription: '[б]',  img: 'img', example: 'Бара - Идет'},
    {letter: 'Вв', transcription: '[w]',  img: 'img', example: 'Вакыт - Время'},
    {letter: 'Гг', transcription: '[гъ]',  img: 'img', example: 'Галәм - Космос'},
    {letter: 'Дд', transcription: '[д]',  img: 'img', example: 'Дәрес  – Урок'},
    {letter: 'Ее', transcription: '[йе]',  img: 'img', example: 'Егерме - Двадцать'},
    {letter: 'Ёё', transcription: '[ё]',  img: 'img', example: 'Щётка'},
    {letter: 'Жж', transcription: '[ж]',  img: 'img', example: 'Жираф'},
    {letter: 'Җҗ', transcription: '[җ]',  img: 'img', example: 'Җәй - Лето'},
    {letter: 'Зз', transcription: '[з]',  img: 'img', example: 'Зур - Большой'},
    {letter: 'Ии', transcription: '[и]',  img: 'img', example: 'Идел - Волга'},
    {letter: 'Йй', transcription: '[й]',  img: 'img', example: 'Йолдыз - Звезда'},
    {letter: 'Кк', transcription: '[к]',  img: 'img', example: 'Көзге - Зеркало'},
    {letter: 'Лл', transcription: '[л]',  img: 'img', example: 'Лилия'},
    {letter: 'Мм', transcription: '[м]',  img: 'img', example: 'Мин - Я'},
    {letter: 'Нн', transcription: '[н]',  img: 'img', example: 'Нур - Луч'},
    {letter: 'Ңң', transcription: '[ң]',  img: 'img', example: 'Яңгыр - Дождь'},
    {letter: 'Оо', transcription: '[о]',  img: 'img', example: 'Он - Мука'},
    {letter: 'Өө', transcription: '[ө]',  img: 'img', example: 'Өй - Дом'},
    {letter: 'Пп', transcription: '[п]',  img: 'img', example: 'Папка'},
    {letter: 'Рр', transcription: '[р]',  img: 'img', example: 'Рәсем - Рисунок'},
    {letter: 'Сс', transcription: '[с]',  img: 'img', example: 'Сөт - Молоко'},
    {letter: 'Тт', transcription: '[т]',  img: 'img', example: 'Тарак - Расчёска'},
    {letter: 'Уу', transcription: '[у]',  img: 'img', example: 'Урындык - Стул'},
    {letter: 'Үү', transcription: '[ү]',  img: 'img', example: 'Үгез - Бык'},
    {letter: 'Фф', transcription: '[ф]',  img: 'img', example: 'Фил - Слон'},
    {letter: 'Хх', transcription: '[х]',  img: 'img', example: 'Хат - Письмо'},
    {letter: 'Һһ', transcription: '[һ]',  img: 'img', example: 'Һәйкәл - Памятник'},
    {letter: 'Цц', transcription: '[ц]',  img: 'img', example: 'Цирк'},
    {letter: 'Чч', transcription: '[ч]',  img: 'img', example: 'Чәй - Чай'},
    {letter: 'Шш', transcription: '[ш]',  img: 'img', example: 'Шикәр - Сахар'},
    {letter: 'Щщ', transcription: '[щ]',  img: 'img', example: 'Щи'},
    {letter: 'Ъ', transcription: '[Ъ]',  img: 'img', example: 'Алъяпкыч - Передник'},
    {letter: 'Ыы', transcription: '[ы]',  img: 'img', example: 'Ылыс - Хвоя'},
    {letter: 'Ь', transcription: '[Ь]',  img: 'img', example: 'Көньяк - Юг'},
    {letter: 'Ээ', transcription: '[э]',  img: 'img', example: 'Эш - Работа'},
    {letter: 'Юю', transcription: '[йү]',  img: 'img', example: 'Ютәл - Кашель'},
    {letter: 'Яя', transcription: '[йә]',  img: 'img', example: 'Ярдәм - Помощь'},
]

const AlphabetLearn = () => {
    const dispatch  = useDispatch();
    const {headerLocalization} = useSelector(state => state.app)
    const [letterIndex, setLetterIndex] = useState(0)

    useEffect(() => {
        dispatch(editHeader('alphabetLearnPage', true))
    }, [])

    const handleClick = (type) => {
      if (type === 'next') {
          if (letterIndex === letters.length - 1) {
              setLetterIndex(0);
          } else  {
              setLetterIndex(letterIndex + 1);
          }
      } else {
          if (letterIndex === 0) {
              setLetterIndex(letters.length - 1);
          } else  {
              setLetterIndex(letterIndex - 1);
          }
      }
    }

    return (
        <div className="App alphabet__learn">
            <div className="alphabet__learn__wrp">
                <div className="heartbeat" style={{textAlign: 'center'}} onClick={(e) => {
                    e.currentTarget.classList.remove('heartbeat');
                    new Audio(audio.letters[letterIndex]).play();
                }}>
                    <div className="alphabet__learn__letter" >{letters[letterIndex].letter}</div>
                    <div className="alphabet__learn__transcription">{letters[letterIndex].transcription}</div>
                </div>
                <div className="alphabet__learn__img__wrp">
                    <img src={alphabetImg.img[letterIndex]} className="alphabet__learn__img" alt="img"/>
                </div>
                <div className="alphabet__learn__example heartbeat"
                     onClick={(e) => {
                         e.currentTarget.classList.remove('heartbeat');
                         new Audio(audio.example[letterIndex]).play();
                     }}
                >{letters[letterIndex].example}</div>
                <div className="alphabet__learn__btns">
                    <Button className="alphabet__learn__btn"
                            type="primary"
                            shape="round"
                            icon={<ArrowLeftOutlined />}
                            size="large"
                            onClick={() => {handleClick('back')}}
                    />
                    <Button className="alphabet__learn__btn"
                            type="primary"
                            shape="round"
                            icon={<ArrowRightOutlined />}
                            size="large"
                            onClick={() => {handleClick('next')}}
                    />
                </div>
            </div>
        </div>
    );
};

export default AlphabetLearn;