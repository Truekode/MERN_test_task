import React, {useCallback, useEffect} from 'react';
import {Avatar} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {editHeader, getUserInfo, logOut} from "../redux/Actions/actions";
import {localization} from "../localization";
import avatar from '../img/avatar.png'
const Profile = () => {
    const dispatch  = useDispatch();
    const {headerTitle, headerLocalization, token, user} = useSelector(state => state.app)



    useEffect(() => {
        dispatch(getUserInfo(token))
        dispatch(editHeader('headerTitleProfile', false))
    }, [])

    return (
        <div className="App" >
            <div className="user__info">
                <Avatar className="user__avatar" size={180} src={avatar} />
                <div className="user__info__wrp">
                    {/*<div className="user__info__wrp__name">Залетный</div>*/}
                    <p className="user__info__wrp__status">{`${user.lastName} ${user.firstName} ${user.patronymic}`}</p>
                </div>
                <div className="progress__wrp">
                    <div className="progress">
                        <p>{localization[headerLocalization].profileStatusWord}</p>
                        <p>3</p>
                    </div>
                    <div className="progress">
                        <p>{localization[headerLocalization].profileProgressLesson}</p>
                        <p>0</p>
                    </div>
                </div>
                <button className="myActions">{localization[headerLocalization].profileStatusLevel}</button>
                <button className="myActions">{localization[headerLocalization].profileStatusAchievements}</button>
                <button className="myActions">Настройки</button>
                <button className="myActions" onClick={() => dispatch(logOut)}>Выйти из профиля</button>
            </div>
        </div>
    );
};

export default Profile;