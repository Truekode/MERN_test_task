import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";

const AlphabetLearn = () => {
    const dispatch  = useDispatch();
    const {headerLocalization} = useSelector(state => state.app)

    useEffect(() => {
        dispatch(editHeader('alphabetLearnPage', true))
    }, [])

    return (
        <div className="App">
            
        </div>
    );
};

export default AlphabetLearn;