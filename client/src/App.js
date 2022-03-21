import {Card, Alert, Input, Button, Row, Col, Spin} from 'antd';
import {useEffect, useState} from "react";
import {useHttp} from "./hooks/http.hook";

function App() {
    const [data, setData] = useState('')
    const [alert, setAlert] = useState(false)
    const {loading, error, request, clearError} = useHttp()
    const regObj = {
        "CardNumber": /^[0-9]{16}$/,
        "ExpDate": /^(0?[1-9]|1[012])[- /.][0-9]{4}$/,
        "Cvv": /^[0-9]{3}$/,
        "Amount": /^[0-9]*$/
    }
    const [status, setStatus] = useState({ "CardNumber": '', ExpDate: '', Cvv: '', Amount: '' })
    const [payData, setPayData] = useState({ "CardNumber": '', ExpDate: '', Cvv: '', Amount: 0 })

    const handlerInput = (event) => {
        setPayData({...payData,
            [event.target.title]: event.target.value
        })
        if (regObj[event.target.title].test(event.target.value)) {
            setStatus({...status, [event.target.title]: 'true'})
        } else {
            setStatus({...status, [event.target.title]: 'warning'})
        }
    }

    const handlerClick = async () => {
        try {
            const data = await request('api/pay/accept', 'POST', {...payData})
            setData(data)
            setAlert(true)
        } catch (e) {}
    }

    return (
        <div className="App">
            <Card title="Оплата картой">
                <div className="card__body">
                    <Input
                        title="CardNumber"
                        onChange={handlerInput}
                        status={status.CardNumber}
                        placeholder="Номер карты"
                        showCount
                        maxLength={16}/>
                    <Row>
                        <Col span={12}>
                            <Input
                                value={payData.ExpDate}
                                title="ExpDate"
                                onChange={handlerInput}
                                type="text"
                                placeholder="MM/YYYY"
                                status={status.ExpDate}
                                maxLength={7}/>
                        </Col>
                        <Col span={12}>
                            <Input
                                title="Cvv"
                                onChange={handlerInput}
                                type="password"
                                status={status.Cvv}
                                placeholder="CVV"
                                maxLength={3}/>
                        </Col>
                    </Row>
                    <Input
                        title="Amount"
                        onChange={handlerInput}
                        prefix="$"
                        status={status.Amount}
                        placeholder="Сумма" />
                    <Button
                        onClick={handlerClick}
                        disabled={!Object.values(status).every((item) => item === 'true')}
                        type="primary"
                        block>
                        Оплатить
                    </Button>
                </div>
            </Card>
            {loading
                ? <Spin />
                : <></>
            }
            { alert
                ? <Alert message={JSON.stringify(data)} type="success" />
                : <></>
            }
        </div>
    );
}

export default App;
