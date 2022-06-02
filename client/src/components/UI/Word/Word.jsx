import React from 'react';
import cl from "../Word/Word.module.css";

const Word = ({word, onClick}) => {
    return (
        <div className={cl.word} onClick={onClick}>
            {word}
        </div>
        );
};

export default Word;