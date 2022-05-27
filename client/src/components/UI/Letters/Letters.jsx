import React from 'react';
import cl from './Letters.module.css'

const Letters = ({letter, playAudio}) => {
    return (
        <div className={cl.letter__wrp} onClick={playAudio}>
            {letter}
        </div>
    );
};

export default Letters;