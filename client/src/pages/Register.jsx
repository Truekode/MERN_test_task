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
        patronymic: 'test',
        email: '',
        password: '',
        birthDay: new Date,
        level: 'junior'
    })

    const changeHandler = (event, segmented = false, value) => {
        if (segmented) {
            setForm({ ...form, 'level': value })
            return
        }
        setForm({ ...form, [event.target.name]: event.target.value.trim() })
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
        <div className="Login App Registration">
            {status.type === 'success'
                ?  <div className="notification__success notification__auth">
                    <Alert
                        message="?????????????????????? ???????????? ??????????????!"
                        // description="?????????????????????? ???????????? ??????????????!"
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
                        // description="?????????????????????? ???????????? ??????????????!"
                        type="error"
                        showIcon
                    />
                </div>
                : <></>
            }
            <form>
                <Space direction="vertical">
                    <h4 className="loginHeader">??????????????????????</h4>
                    <Input placeholder="??????" name='firstName' onChange={changeHandler}/>
                    <Input placeholder="??????????????" name='lastName' onChange={changeHandler}/>
                    <Input placeholder="??????/Email" name='email' onChange={changeHandler}/>
                    <Input className="loginInput" placeholder="??????????" name='login' onChange={changeHandler}/>
                    <Input.Password
                        placeholder="????????????"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        name='password' onChange={changeHandler}
                    />
                    <Input.Password
                        placeholder="?????????????????????? ????????????"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        name='testPass' onChange={(event) => setTestPass(event.target.value)}
                    />
                    <div style={{textAlign: 'center',
                        color: '#FFFFFF'}}>???????????? ???????? ??????????????</div>
                    <Segmented  options={[  {label: '????????????????????', value: 'junior'},
                                            {label: '??????????????', value: 'middle'},
                                            {label: '??????????????????????', value: 'senior'}
                        ]}
                                name='level'
                                onChange={(value) => changeHandler('', true, value)}
                    />
                    <div className="logined__actions">
                        <Button className="regist__btn" disabled={btnDisable} type="primary" block onClick={registerHandler}>??????????????????????</Button>
                        <Button className="login__btn" type="primary" block onClick={() => router(`/login`)}>??????????</Button>
                    </div>
                   </Space>
            </form>
        </div>
    );
};

export default Register;
