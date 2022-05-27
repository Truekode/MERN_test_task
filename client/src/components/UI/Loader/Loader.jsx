import React from 'react';
import cl from './Loader.module.css'
import {Spin} from "antd";

const Loader = () => {
    return (
        <div className={cl.loaderWrp}>
            <Spin size="large"/>
        </div>
    );
};

export default Loader;