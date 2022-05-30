import React, {useEffect} from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {editHeader} from "../redux/Actions/actions";

const Tests = () => {
    const dispatch  = useDispatch();
    const {headerLocalization} = useSelector(state => state.app)
    const router = useNavigate();

    useEffect(() => {
        dispatch(editHeader('tasksPageTests', true))
    }, [])

    return (
        <div className="App">
            <div className="Tests">
                <Card className="task__item " onClick={() => router(`/tests/1`)}>
                    <Meta
                        // avatar={<Avatar shape="square" size={50} src={facts} />}
                        title='Тест 1'
                        description="Тема: ”Глаголы”"
                    />
                </Card>
            </div>
        </div>
    );
};

export default Tests;