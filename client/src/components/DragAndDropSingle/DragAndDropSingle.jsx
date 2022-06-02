import React from 'react';
import {Dustbin} from "./Distbin";
import {Box} from "./Box";

const DragAndDropSingle = ({img, boxs}) => {
    return (
        <div className="lesson__wrp">
            <div className="lesson__text">
                Перетащи правильное слово к картинке
            </div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Dustbin img={img}/>
            </div>
            <div className="lesson__text">
                Удерживай что бы переместить
            </div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                {boxs.map((item) => <Box key={item} name={item} />)}
            </div>
        </div>
    );
};

export default DragAndDropSingle;