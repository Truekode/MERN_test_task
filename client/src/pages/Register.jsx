import React, {useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {Alert, Button, Input, Segmented, Space} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {login} from "../redux/Actions/actions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const router = useNavigate();
    const {loading, request, error, clearError} = useHttp()
    const dispatch = useDispatch();
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });
    const [testPass, setTestPass] = useState(false);
    const [btnDisable, setBtnDisable] = useState(true);
    const [form, setForm] = useState({
        login: '',
        lastName: '',
        firstName: '',
        patronymic: '',
        email: 'test@mail.ru',
        password: '',
        birthDay: new Date,
        level: 'junior'
    })

    const changeHandler = (event, segmented = false, value) => {
        if (segmented) {
            setForm({ ...form, 'level': value })
            return
        }
        setForm({ ...form, [event.target.name]: event.target.value.trim().toLowerCase() })
    }

    const registerHandler = async (event) => {
        event.preventDefault();
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log(data)
            setStatus({...status, type: data.type, message: data.message})
            setTimeout(() => {
                router('/login');
            }, 3000)
        } catch (e) {
            setStatus({...status, type: 'error', message: e.message})
            setTimeout(() => {
                setStatus({
                    type: '',
                    message: ''
                })
            }, 3000)
        }
    }

    useEffect(() => {
        if (Object.values(form).filter(item => !!item).length === Object.values(form).length
                && testPass === form.password) {
            setBtnDisable(false)
        } else {
            setBtnDisable(true)
        }
    },[form, testPass, status])

    return (
        <div className="Login App">
            {status.type === 'success'
                ?  <div className="notification__success notification__auth">
                    <Alert
                        message="Регистрация прошла успешно!"
                        // description="Регистрация прошла успешно!"
                        type="success"
                        showIcon
                    />
                </div>
                : <></>
            }
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
                    <h4>Страница регистрации</h4>
                    <Input placeholder="Введите логин" name='login' onChange={changeHandler}/>
                    <Input placeholder="Введите ваше имя" name='firstName' onChange={changeHandler}/>
                    <Input placeholder="Введите вашу фамилию" name='lastName' onChange={changeHandler}/>
                    <Input placeholder="Введите ваше отчество" name='patronymic' onChange={changeHandler}/>
                    <Input.Password
                        placeholder="Введите пароль"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        name='password' onChange={changeHandler}
                    />
                    <Input.Password
                        placeholder="Подтвердите пароль"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        name='testPass' onChange={(event) => setTestPass(event.target.value)}
                    />
                    <div>Выбери свой уровень</div>
                    <Segmented  options={[  {label: 'Начинающий', value: 'junior'},
                                            {label: 'Средний', value: 'middle'},
                                            {label: 'Продвинутый', value: 'senior'}
                        ]}
                                name='level'
                                onChange={(value) => changeHandler('', true, value)}
                    />
                    <Button disabled={btnDisable} type="primary" block onClick={registerHandler}>Регистрация</Button>
                    <Button type="link" block onClick={() => router(`/login`)}>Войти</Button>
                </Space>
            </form>
        </div>
    );
};

export default Register;
