import React from 'react';
import cl from './Letters.module.css'

const Letters = ({letter, onClick}) => {
    return (
        <div className={cl.letter__wrp} onClick={onClick}>
            {letter}
        </div>
    );
};

export default Letters;