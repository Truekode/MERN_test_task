import React, {useEffect, useState} from "react";
import 'antd/dist/antd.css';
import './css/Animation.css'
import './css/App.css'
import MyNavbar from "./components/UI/Navbar/MyNavbar";
import AppRouter from "./components/AppRouter";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Dropdown, Menu, Select, Space} from "antd";
import {localization} from "./localization";
import {editLocalization} from "./redux/Actions/actions";
import Loader from "./components/UI/Loader/Loader";


function App() {
    const dispatch = useDispatch();
    const {auth} = useSelector(state => state.app)
    const [windowSize, setWindowSize] = useState(window.innerHeight);
    const navigate = useNavigate();
    const {headerTitle, headerBack, headerLocalization, loading} = useSelector(state => state.app)

    const menu = (
        <Menu
            items={[
                {
                    label: <div onClick={() => changeLanguage('ru')}>RU</div>,
                    key: 'RU',
                },
                {
                    label: <div onClick={() => changeLanguage('tat')}>TAT</div>,
                    key: 'TAT',
                },
                {
                    label: <div onClick={() => changeLanguage('en')}>EN</div>,
                    key: 'EN',
                }
            ]}
        />
    );

    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerHeight);
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    function changeLanguage (value) {
        dispatch(editLocalization(value));
    }

    return (
        <div className={auth
            ? `root__wrp registr__wrp`
            : `root__wrp`}
            style={{
            height: windowSize,
            overflow: 'hidden !important',
        }}>
            {loading
                ? <Loader />
                : <></>
            }
                {auth
                    ? <header>
                        {headerBack
                            ? <ArrowBackIosIcon style={{
                                position: 'absolute',
                                color: 'rgba(0, 0, 0, 0.85)',
                                top: '16px',
                                left: '20px'
                            }}
                                                onClick={() => navigate(-1)}/>
                            : <></>
                        }
                        <p>{localization[headerLocalization][headerTitle]}</p>
                        {/*<div style={{*/}
                        {/*    position: 'absolute',*/}
                        {/*    top: '18px',*/}
                        {/*    right: '20px',*/}
                        {/*    width: '30px',*/}
                        {/*    height: '30px',*/}
                        {/*}}>*/}
                        {/*    <Dropdown overlay={menu} placement="bottom">*/}
                        {/*        <div>*/}
                        {/*            <Space>*/}
                        {/*                {headerLocalization.toUpperCase()}*/}
                        {/*            </Space>*/}
                        {/*        </div>*/}
                        {/*    </Dropdown>*/}
                        {/*</div>*/}
                        <Select
                            defaultValue="ru"
                            onChange={changeLanguage}
                            showArrow={false}
                            bordered={false}
                            size="large"
                            style={{
                                position: 'absolute',
                                top: '9px',
                                right: '5px',
                                // color: 'rgb(22 154 192)',
                                fontSize: '16px',
                                width: '55px'
                            }}
                        >
                            <Select.Option value="tat">TAT</Select.Option>
                            <Select.Option value="ru">RU</Select.Option>
                            <Select.Option value="en">EN</Select.Option>
                        </Select>
                    </header>
                    : <></>
                }
                <AppRouter/>
                {auth
                    ? <MyNavbar/>
                    : <></>
                }
        </div>
    )
}

export default App;