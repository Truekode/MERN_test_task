import React, {useState} from 'react';
import {Alert, Button, Input, Space} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import {useHttp} from "../hooks/http.hook";
import {useDispatch} from "react-redux";
import {login} from "../redux/Actions/actions";
import {useNavigate} from "react-router-dom";

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
            const data = await request('/api/auth/login', 'POST', {...form})
            dispatch(login(data.token, data.userId, data.user));
        } catch (e) {
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
        <div className="Login App">
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
            <form>
                <Space direction="vertical">
                    <h4>Страница авторизации</h4>
                    <Input placeholder="Введите логин" name='login' onChange={changeHandler}/>
                    <Input.Password
                        placeholder="Введите пароль"
                        name='password' onChange={changeHandler}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    <Button type="primary" block onClick={loginHandler}>Войти</Button>
                    <Button type="link" block onClick={() => router(`/registration`)}>Зарегистрироваться</Button>
                </Space>
            </form>
        </div>
    );
};

export default Login;