import React, {useEffect, useState} from 'react';
import {Checkbox, Divider, Progress} from "antd";
import {useDispatch} from "react-redux";
import {editHeader} from "../redux/Actions/actions";

// const dictionaryArr = [
//     {title: 'Әти', translate: 'Папа', status: true},
//     {title: 'Әни', translate: 'Мама',status: false},
//     {title: 'Әби', translate: 'Бабушка',status: false},
//     {title: 'Дәүләт', translate: 'Государство',status: false},
//     {title: 'Канун', translate: 'Закон',status: true},
//     {title: 'Як', translate: 'Край',status: true},
// ]

const Dictionary = () => {
    const dispatch  = useDispatch();

    useEffect(() => {
        dispatch(editHeader('tasksPageDictionary', true))
    }, []);

    const [dict, setDict] = useState([
        {title: 'Әти', translate: 'Папа', status: true},
        {title: 'Әни', translate: 'Мама',status: false},
        {title: 'Әби', translate: 'Бабушка',status: false},
        {title: 'Дәүләт', translate: 'Государство',status: false},
        {title: 'Канун', translate: 'Закон',status: true},
        {title: 'Як', translate: 'Край',status: true},
    ]);

    function onChange(title) {
        setDict(dict.map(item => {
            if (item.translate === title) {
                item.status = !item.status;
            }
            return item;
        }))
    }

    return (
        <div className="App">
            <div className="dictionary container">
                <div className="dictionary__wrp">
                    <div className="dictionary__wrp__count-word">
                        <div>Всего слов</div>
                        <div>{dict.length}</div>
                    </div>
                    <Progress type="circle" percent={Math.round(dict.filter(item => item.status === true).length / dict.length * 100)} />
                </div>
                <Divider />
                {dict.map(item => <Checkbox checked={item.status} key={item.title} style={{ fontSize: '20px' }} onChange={() => onChange(item.translate)}>{item.title}</Checkbox>)}
            </div>
        </div>
    );
};

export default Dictionary;