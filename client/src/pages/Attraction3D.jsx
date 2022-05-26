import React, {useEffect} from 'react';
import {Panorama, YMaps} from "react-yandex-maps";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";

const Attraction3D = () => {
    const params = useParams();
    const dispatch  = useDispatch();
    const attraction = useSelector(state => state.attractions.attractions)
        .find(item =>  item.id === parseInt(params.id))

    useEffect(() => {
        dispatch(editHeader(attraction.title, true))
    }, [])

    return (
        <YMaps query={{ apikey: '06ce8804-f797-410a-8274-6aa1a07dcb61' }}>
            <Panorama style={{width: '100%', height: '100%'}} defaultPoint={attraction.pointsFor3D} options={{
                direction: attraction.directionFor3D
            }}/>
            {/*<Map width="100%" defaultState={{ center: attraction.pointsFor3D, zoom: 16 }} />*/}
        </YMaps>
    );
};

export default Attraction3D;