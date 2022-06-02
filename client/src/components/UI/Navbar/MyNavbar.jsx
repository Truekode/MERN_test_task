// eslint-disable-next-line

import React, {useEffect} from 'react';
// import {AuthContext} from "../../../context";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useLocation, useNavigate} from "react-router-dom";
import {localization} from "../../../localization";
import {useSelector} from "react-redux";

const MyNavbar = () => {
    // const {setIsAuth} = useContext(AuthContext);
    const {headerLocalization} = useSelector(state => state.app)
    const [value, setValue] = React.useState(0);
    // const logout = () => {
    //     setIsAuth(false);
    //     localStorage.removeItem('auth')
    // }
    const router = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('alphabet')
            || location.pathname.includes('tasks')
            || location.pathname.includes('constructor')
            || location.pathname.includes('learn')
            || location.pathname.includes('tests')
            || location.pathname.includes('grammar')
        ) {
            setValue(1);
        }
        if (location.pathname.includes('profile')) {
            setValue(2);
        }
    }, [location.pathname])

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels={true}
            className="navbar__wrp"
        >
            <BottomNavigationAction label={localization[headerLocalization].headerTitleMain} icon={<HomeIcon />} onClick={() => router(`/home`)}/>
            <BottomNavigationAction label={localization[headerLocalization].headerTitleTasks}  icon={<AssignmentIcon />}  onClick={() => router(`/tasks`)}/>
            <BottomNavigationAction label={localization[headerLocalization].headerTitleProfile}  icon={<AccountCircleIcon />} onClick={() => router(`/profile`)}/>
        </BottomNavigation>
    );
};

export default MyNavbar;