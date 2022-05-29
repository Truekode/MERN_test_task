import React, {useEffect, useState} from 'react';
import {Alert, Button, Divider, Tag} from "antd";
import {useDispatch} from "react-redux";
import {editHeader} from "../redux/Actions/actions";


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const constArr = [
    'Казанда зур һәм матур өйләр бик күп',
    'Тиздән салкын декабрь һәм яңа ел җитә',
    'Һәр кеше үзенчә гүзәл һәм матур',
    'Кышкы каникул җитүгә яңа ел башлана.'
]

const Constructor = () => {
    const dispatch  = useDispatch();

    const [offer, setOffer] = useState(getRandomInt(constArr.length));
    const [succses, setSuccses] = useState(false);
    const [error, setError] = useState(false);
    const [arrays, setArrays] = useState({resultArr: [], startAtt: constArr[offer].split(' ').sort(() => Math.random()-0.5)});
    // eslint-disable-next-line
    useEffect(() => {
        dispatch(editHeader('tasksPageConstructor', true))
        if (arrays.startAtt.length === 0 && JSON.stringify(arrays.resultArr) === JSON.stringify(constArr[offer].split(' '))) {
            setSuccses(true)
            setOffer(getRandomInt(constArr.length-1))
        }
        if ( arrays.startAtt.length === 0 && JSON.stringify(arrays.resultArr) !== JSON.stringify(constArr[offer].split(' '))) {
            setError(true)
            goAgain()
        }
    },[arrays])

    function changeResult(item) {
        setArrays({startAtt: arrays.startAtt.filter(word => word !== item), resultArr: [...arrays.resultArr, item] })
    }

    function goNext() {
        setArrays({resultArr: [], startAtt: constArr[offer].split(' ').sort(() => Math.random()-0.5)})
        setSuccses(false)
    }

    function goAgain() {
        setSuccses(false)
        setTimeout(() => setError(false), 2000)
        setTimeout(() => setArrays({resultArr: [], startAtt: constArr[offer].split(' ').sort(() => Math.random()-0.5)}), 2000)
    }

    return (
        <div className="App">
            <div className="constructor container">
                <p style={{textAlign: 'center'}}>Составь предложение из предложенных слов</p>
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
                    {arrays.startAtt.map((item, index) => <Tag key={index} onClick={() => changeResult(item)}  style={{ fontSize: '20px', cursor: 'pointer', padding: '10px' }}>{item}</Tag>)}
                </div>
                <Divider />
                {succses
                    ? <>
                        <h1>Успешно</h1>
                        <Button type="primary" onClick={() => goNext()}>Далее</Button>
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

export default Constructor;