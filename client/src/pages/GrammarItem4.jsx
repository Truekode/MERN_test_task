import React, {useEffect, useState} from 'react';
import music from  '../img/music.png'
import {audio} from "../public/audioLetters";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {editHeader} from "../redux/Actions/actions";
import TestComponent from "../components/TestComponent";
import {Button} from "antd";
import {ItemTypes} from "../components/DragAndDropMulti/ItemTypes";
import {DragAndDropMulti} from "../components/DragAndDropMulti/DragAndDropMulti";
import Letters from "../components/UI/Letters/Letters";
const GrammarItem4 = () => {
    const dispatch  = useDispatch();
    const {headerLocalization} = useSelector(state => state.app)
    const router = useNavigate();
    const [startTest, setStartTest] = useState(false);

    useEffect(() => {
        dispatch(editHeader('tasksPageGrammar', true))
    }, [])

    const [dustbins, setDustbins] = useState([
        { name: '1', accepts: [ItemTypes.BOX], lastDroppedItem: null, trues: 'Бер' },
        { name: '2', accepts: [ItemTypes.BOX], lastDroppedItem: null, trues: 'Ике' },
        { name: '3', accepts: [ItemTypes.BOX], lastDroppedItem: null, trues: 'Өч'},
        { name: '4', accepts: [ItemTypes.BOX], lastDroppedItem: null, trues: 'Дүрт' },
        { name: '5', accepts: [ItemTypes.BOX], lastDroppedItem: null, trues: 'Биш' },
        { name: '6', accepts: [ItemTypes.BOX], lastDroppedItem: null, trues: 'Алты' },
        { name: '7', accepts: [ItemTypes.BOX], lastDroppedItem: null, trues: 'Җиде' },
        { name: '8', accepts: [ItemTypes.BOX], lastDroppedItem: null, trues: 'Сигез' },
        { name: '9', accepts: [ItemTypes.BOX], lastDroppedItem: null, trues: 'Тугыз' },
        { name: '10', accepts: [ItemTypes.BOX], lastDroppedItem: null, trues: 'Ун' },
    ])
    const [boxes] = useState([
        { name: 'Бер', type: ItemTypes.BOX },
        { name: 'Ике', type: ItemTypes.BOX },
        { name: 'Өч', type: ItemTypes.BOX },
        { name: 'Дүрт', type: ItemTypes.BOX },
        { name: 'Биш', type: ItemTypes.BOX },
        { name: 'Алты', type: ItemTypes.BOX },
        { name: 'Җиде', type: ItemTypes.BOX },
        { name: 'Сигез', type: ItemTypes.BOX },
        { name: 'Тугыз', type: ItemTypes.BOX },
        { name: 'Ун', type: ItemTypes.BOX },
    ])

    return (
        <div className="App">
            <div className="lesson__wrp">
                {startTest
                    ? <>
                        <DragAndDropMulti task="Сопоставь цифры с их переводом"
                                          onSuccess={() => router(`/grammar`)}
                                          setDustbins={setDustbins}
                                          dustbins={dustbins}
                                          boxes={boxes}/>
                    </>
                    : <>
                        <h2 className="lesson__title">Саннарны өйрәнәбез - Учим цифры</h2>
                        <br/>
                        <div className="numbers__wrapper">
                            {
                                dustbins.map((item, index) =>
                                    <Letters letter={`${item.name} - ${item.trues}`}
                                             key={item.name}
                                             onClick={() => {
                                                 new Audio(audio.numbers[index + 1]).play();
                                             }}
                                />)
                            }
                            {/*<div className="number">10 - ун*/}
                            {/*    <button onClick={() => {*/}
                            {/*        new Audio(audio.numbers[10]).play();*/}
                            {/*    }}><img src={music} alt=""/></button>*/}
                            {/*</div>*/}
                        </div>
                        <br/>
                        <Button className="" type="primary" block onClick={() => setStartTest(true)}>Проверить себя</Button>
                    </>
                }
            </div>
        </div>
    );
};

export default GrammarItem4;