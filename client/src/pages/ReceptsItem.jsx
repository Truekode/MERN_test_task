import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editHeader} from "../redux/Actions/actions";
import {recipes} from "./Recepts";
import {Divider} from "antd";

const ReceptsItem = () => {
    const router = useNavigate();
    const dispatch  = useDispatch();
    const params = useParams();
    const recipe = recipes.find(item =>  item.id === parseInt(params.id))

    useEffect(() => {
        dispatch(editHeader(recipe.title, true))
    }, [])

    return (
        <div className="App container">
            <div className="attraction__item">
                <img src={recipe.img} alt=""/>
                <Divider />
                <div className="ingredients__title">Нам понадобится:</div>
                <ul className="ingredients">
                    {recipe.ingredients.map((item) => <li>
                        {item}
                    </li>)}
                </ul>
                <div className="ingredients__title">Приготовление:</div>
                <ol className="steps">
                    {recipe.steps.map((item) => <li>
                        {item}
                    </li>)}
                </ol>
            </div>
        </div>
    );
};

export default ReceptsItem;