import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";
import AttractionCard from "../components/AttractionCard";


const Attractions = () => {
    const dispatch  = useDispatch();
    const attractionsArr = useSelector(state => state.attractions.attractions)
    useEffect(() => {
        dispatch(editHeader('homePageAttraction', true))
    }, [])

    return (
        <div className="App attraction">
            <div className="attraction__list">
                {
                    attractionsArr.map((item, index) =>
                        <AttractionCard key={index}
                                        itemId={item.id}
                                        title={item.title}
                                        description={item.descriptionShort}
                                        img={item.img}/>
                    )
                }
            </div>
        </div>
    );
};

export default Attractions;