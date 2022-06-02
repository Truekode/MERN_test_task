import React, {useEffect} from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {editHeader} from "../redux/Actions/actions";
import {localization} from "../localization";

const Grammar = () => {
    const dispatch  = useDispatch();
    const {headerLocalization} = useSelector(state => state.app)
    const router = useNavigate();

    useEffect(() => {
        dispatch(editHeader('tasksPageGrammar', true))
    }, [])

    return (
        <div className="App">
            <div className="Tests">
                <Card className="task__item " onClick={() => router(`/grammar/1`)}>
                    <Meta
                        // avatar={<Avatar shape="square" size={50} src={facts} />}
                        title={localization[headerLocalization].grammarLesson + ' 1'}
                        description="Начнем обучение с татарского алфавита"
                    />
                </Card>
                <Card className="task__item " onClick={() => router(`/grammar/2`)}>
                    <Meta
                        // avatar={<Avatar shape="square" size={50} src={facts} />}
                        title={localization[headerLocalization].grammarLesson + ' 2'}
                        description="Учимся знакомится"
                    />
                </Card>
                {/*<Card className="task__item " onClick={() => router(`/grammar/3`)}>*/}
                {/*    <Meta*/}
                {/*        // avatar={<Avatar shape="square" size={50} src={facts} />}*/}
                {/*        title='Урок 3'*/}
                {/*        description="Тема школа"*/}
                {/*    />*/}
                {/*</Card>*/}
                <Card className="task__item " onClick={() => router(`/grammar/4`)}>
                    <Meta
                        // avatar={<Avatar shape="square" size={50} src={facts} />}
                        title={localization[headerLocalization].grammarLesson + ' 3'}
                        description="Учим цифры"
                    />
                </Card>
            </div>
        </div>
    );
};

export default Grammar;
