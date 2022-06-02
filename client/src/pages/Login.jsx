import React, {useState} from 'react';
import {Alert, Button, Input, Space} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import {useHttp} from "../hooks/http.hook";
import {useDispatch} from "react-redux";
import {hideLoader, login, showLoader} from "../redux/Actions/actions";
import {useNavigate} from "react-router-dom";
import logo from '../img/logoinLogin.png'
const Login = () => {
    const dispatch = useDispatch();
    const router = useNavigate();

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });
    // const {token, login, logout, userId, ready} = useAuth()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        login: '', password: ''
    })


    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value.trim().toLowerCase() })
    }

    const loginHandler = async (event) => {
        event.preventDefault();
        try {
            dispatch(showLoader());
            const data = await request('/api/auth/login', 'POST', {...form})
            dispatch(login(data.token, data.userId, data.user));
            dispatch(hideLoader());
        } catch (e) {
            dispatch(hideLoader());
            setStatus({...status, type: 'error', message: e.message})
            setTimeout(() => {
                clearError();
                setStatus({
                    type: '',
                    message: ''
                })
            }, 3000)
        }
    }

    return (
        <div className="Login App Centered">
            {status.type === 'error'
                ? <div className="notification__success notification__auth">
                    <Alert
                        message={status.message}
                        // description="Регистрация прошла успешно!"
                        type="error"
                        showIcon
                    />
                </div>
                : <></>
            }
            <div className="login__container">
                <img src={logo} alt="" style={{width: '250px', marginBottom: '40px'}}/>
                <form>
                    <Space direction="vertical" style={{width: '90%'}}>
                        <Input placeholder="Логин" name='login' onChange={changeHandler}/>
                        <Input.Password
                            placeholder="Пароль"
                            name='password' onChange={changeHandler}
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <div className="logined__actions">
                            <Button className="login__btn" type="primary" block onClick={loginHandler}>Войти</Button>
                            <Button className="regist__btn" type="primary" block onClick={() => router(`/registration`)}>Зарегистрироваться</Button>
                        </div>
                    </Space>
                </form>
            </div>
        </div>
    );
};

export default Login;