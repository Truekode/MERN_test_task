import React, {useEffect, useState} from 'react';
import DragAndDropSingle from "../components/DragAndDropSingle/DragAndDropSingle";
import img from '../img/girl.png'
import {DragAndDropMulti} from "../components/DragAndDropMulti/DragAndDropMulti";
import {useNavigate} from "react-router-dom";
import {ItemTypes} from "../components/DragAndDropMulti/ItemTypes";
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";

const GrammarItem3 = () => {
    const router = useNavigate();
    const dispatch  = useDispatch();
    const {headerLocalization} = useSelector(state => state.app)

    useEffect(() => {
        dispatch(editHeader('tasksPageGrammar', true))
    }, [])
    const [dustbins, setDustbins] = useState([
        { name: '1', accepts: [ItemTypes.BOX], lastDroppedItem: null, trues: 'Бер' },
        { name: '2', accepts: [ItemTypes.BOX], lastDroppedItem: null, trues: 'Ике' },
        { name: '3', accepts: [ItemTypes.BOX], lastDroppedItem: null, trues: 'Өч'},
        { name: '4', accepts: [ItemTypes.BOX], lastDroppedItem: null, trues: 'Дүрт' },
    ])
    const [boxes] = useState([
        { name: 'Бер', type: ItemTypes.BOX },
        { name: 'Ике', type: ItemTypes.BOX },
        { name: 'Өч', type: ItemTypes.BOX },
        { name: 'Дүрт', type: ItemTypes.BOX },
    ])
    return (

        <div className="App">
            <div className="lesson__wrp">

            </div>
            {/*<DragAndDropSingle img={img} boxs={['Кыз', 'Малай']}/>*/}

        </div>
    );
};

export default GrammarItem3;