import React, {useEffect} from 'react';
import {Avatar} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {editHeader, logOut} from "../redux/Actions/actions";
import {localization} from "../localization";

const Profile = () => {
    const dispatch  = useDispatch();
    const {headerTitle, headerLocalization, user} = useSelector(state => state.app)


    useEffect(() => {
        dispatch(editHeader('headerTitleProfile', false))
    }, [])

    return (
        <div className="App" >
            <div className="user__info">
                <Avatar className="user__avatar" size={180} src="https://joeschmoe.io/api/v1/random" />
                <div className="user__info__wrp">
                    {/*<div className="user__info__wrp__name">Залетный</div>*/}
                    <p className="user__info__wrp__status">{`${user.lastName} ${user.firstName} ${user.patronymic}`}</p>
                </div>
                <div className="progress__wrp">
                    <div className="progress">
                        <p>{localization[headerLocalization].profileProgressPages}</p>
                        <p>0</p>
                    </div>
                    <div className="progress">
                        <p>{localization[headerLocalization].profileProgressLesson}</p>
                        <p>0</p>
                    </div>
                </div>
                <div className="progress__wrp">
                    <div className="status">
                        <div>{localization[headerLocalization].profileStatusWord}</div>
                        <div>50</div>
                    </div>
                    <div className="status">
                        <div>{localization[headerLocalization].profileStatusLevel}</div>
                        <div>{user.level}</div>
                    </div>
                </div>
                <button className="myActions">{localization[headerLocalization].profileStatusAchievements}</button>
                <button className="myActions" onClick={() => dispatch(logOut)}>Выйти из профиля</button>
            </div>
        </div>
    );
};

export default Profile;