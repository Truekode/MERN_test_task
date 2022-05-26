import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Map, YMaps} from "react-yandex-maps";
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import {Paper} from "@mui/material";
import {Card} from "antd";

const AttractionItem = () => {
    const router = useNavigate();
    const dispatch  = useDispatch();
    const params = useParams();
    const attraction = useSelector(state => state.attractions.attractions)
                            .find(item =>  item.id === parseInt(params.id))

    useEffect(() => {
        dispatch(editHeader(attraction.title, true))
    }, [])

    return (
        <div className="App attraction">
            <div className="attraction__item">
                {/*<h3>{attraction.title}</h3>*/}
                <Carousel className="attraction__carousel"
                          statusFormatter={() => ''}
                          showArrows={false}
                          showIndicators={false}
                          dynamicHeight={false}
                          // showThumbs={false}
                >
                    {attraction.img.map((item, index) => <div key={index}>
                        <img src={item} alt="" style={{maxHeight: '300px', objectFit: 'cover'}}/>
                    </div>)}
                </Carousel>
                <Paper style={{padding: '10px'}}>
                    {attraction.descriptionShort}
                </Paper>
                <YMaps query={{ apikey: '06ce8804-f797-410a-8274-6aa1a07dcb61' }}>
                    {/*<Panorama style={{width: '100%', height: '100%'}} defaultPoint={[55.798348, 49.105244]} />*/}
                    <Map width="100%" defaultState={{ center: attraction.pointsFor3D, zoom: 16 }} />
                </YMaps>
                <Card className="task__item main__attraction" onClick={() =>
                    router(`/attractions3D/${attraction.id}`)}
                >Посмотреть в 3D</Card>
            </div>
        </div>
    );
};

export default AttractionItem;