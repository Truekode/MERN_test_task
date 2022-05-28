import React, {useEffect} from "react";
import {Avatar, Card} from "antd";
import {useNavigate} from "react-router-dom";
import dictImg from '../img/dict.png'
import constructorImg from '../img/constructor.png'
import learnImg from '../img/learn.png'
import testsImg from '../img/tests.png'
import grammarImg from '../img/grammar.png'
import alphabet from '../img/alphabet.png'
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";
import {localization} from "../localization";

const { Meta } = Card;

function Tasks() {
    const router = useNavigate();
    const dispatch  = useDispatch();
    const {headerLocalization} = useSelector(state => state.app)

    useEffect(() => {
        dispatch(editHeader('headerTitleTasks', false))
    }, [])

    return (
        <div className="App">
            <div >
                <Card className="task__item" onClick={() => router(`/alphabet`)}>
                    <Meta
                        avatar={<Avatar shape="square" size={50} src={alphabet} />}
                        title={localization[headerLocalization].tasksPageAlphabet}
                        description={localization[headerLocalization].tasksPageAlphabetDescription}
                    />
                </Card>
                <Card className="task__item">
                    <Meta
                        avatar={<Avatar shape="square" size={50} src={grammarImg} />}
                        title={localization[headerLocalization].tasksPageGrammar}
                        description={localization[headerLocalization].tasksPageGrammarDescription}
                    />
                </Card>
                <Card className="task__item" onClick={() => router(`/learn`)}>
                    <Meta
                        avatar={<Avatar shape="square" size={50} src={learnImg} />}
                        title={localization[headerLocalization].tasksPageLearnWords}
                        description={localization[headerLocalization].tasksPageLearnWordsDescription}
                    />
                </Card>
                <Card className="task__item" onClick={() => router(`/constructor`)}>
                    <Meta
                        avatar={<Avatar shape="square" size={50} src={constructorImg} />}
                        title={localization[headerLocalization].tasksPageConstructor}
                        description={localization[headerLocalization].tasksPageConstructorDescription}
                    />
                </Card>
                <Card className="task__item">
                    <Meta
                        avatar={<Avatar shape="square" size={50} src={testsImg} />}
                        title={localization[headerLocalization].tasksPageTests}
                        description={localization[headerLocalization].tasksPageTestsDescription}
                    />
                </Card>
                <Card className="task__item" onClick={() => router(`/dictionary`)}>
                    <Meta
                        avatar={<Avatar shape="square" size={50} src={dictImg} />}
                        title={localization[headerLocalization].tasksPageDictionary}
                        description={localization[headerLocalization].tasksPageDictionaryDescription}
                    />
                </Card>

            </div>
        </div>
    );
}

export default Tasks;