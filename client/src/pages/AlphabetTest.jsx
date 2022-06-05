import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";
import {useNavigate} from "react-router-dom";
import {Alert, Button, Divider, Tag} from "antd";
import {alphabetImg} from "../public/alphabetImg";
import {letters} from "./AlphabetLearn";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const constArr = letters.map(item => {
    return {
        name: item.example.split(' - ')[0],
        translate: item.example.split(' - ')[1],
    }
})

//     [
//     {name: 'Авыз', translate: 'Рот', img: ''}
// ]

const AlphabetTest = () => {
    const dispatch  = useDispatch();
    const {headerLocalization} = useSelector(state => state.app)


    const [offer, setOffer] = useState(getRandomInt(constArr.length));
    const [succses, setSuccses] = useState(false);
    const [error, setError] = useState(false);
    const [arrays, setArrays] = useState({resultArr: [], startAtt: constArr[offer].name.split('').sort(() => Math.random()-0.5)});

    useEffect(() => {
        dispatch(editHeader('alphabetTestPage', true))


        if (arrays.startAtt.length === 0 && JSON.stringify(arrays.resultArr) === JSON.stringify(constArr[offer].name.split(''))) {
            setSuccses(true)
            setOffer(getRandomInt(constArr.length-1))
        }
        if ( arrays.startAtt.length === 0 && JSON.stringify(arrays.resultArr) !== JSON.stringify(constArr[offer].name.split(''))) {
            setError(true)
            goAgain()
        }
    },[arrays])

    function changeResult(item) {
        setArrays({startAtt: arrays.startAtt.filter(word => word !== item), resultArr: [...arrays.resultArr, item] })
    }

    function goNext() {
        setArrays({resultArr: [], startAtt: constArr[offer].name.split('').sort(() => Math.random()-0.5)})
        setSuccses(false)
    }

    function goAgain() {
        setSuccses(false)
        setTimeout(() => setError(false), 2000)
        setTimeout(() => setArrays({resultArr: [], startAtt: constArr[offer].name.split('').sort(() => Math.random()-0.5)}), 2000)
    }

    return (
        <div className="App">
                <div className="constructor container">
                    <h2 className="lesson__title" style={{textAlign: 'center'}}>Составь слово из предложенных букв</h2>
                    <div className="">
                        {/*<h2 className="lesson__title">{constArrTranslate[offer]}</h2>*/}
                        <div className="constr__wrp">
                            {arrays.resultArr.map((item, index) => {
                                if (!!item) {
                                    return <p key={index}>{item}</p>
                                } else {
                                    return <p key={index}>______</p>
                                }
                            })}
                        </div>
                        <Divider />
                        <div className="constr__wrp">
                            {arrays.startAtt.map((item, index) => <Tag key={index} onClick={() => changeResult(item)}  style={{ fontSize: '20px', cursor: 'pointer', padding: '10px' }}>{item.toLowerCase()}</Tag>)}
                        </div>
                    </div>
                    {succses
                        ? <>
                            <div className="alphabet__test__wrp">
                                <h1>{constArr[offer].translate}</h1>
                                <img src={alphabetImg.img[offer]} alt=""/>
                                <br/>
                                <Button type="primary" onClick={() => goNext()}>Далее</Button>
                            </div>
                        </>
                        : <>
                            {error
                                ? <Alert banner={true} closable={true} message="Ошибка! Попробуй еще раз!" type="error" showIcon />
                                : <></>
                            }
                        </>
                    }
                </div>
        </div>
    );
};

export default AlphabetTest;