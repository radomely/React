import React from "react";
import avatar from "./images.png";
import "./UserInfo.css";

const UserInfo = () => {
    return (
        <div className = "UserInfo">
            <img src={avatar} alt="ava" className="UserInfo__img"/>
            <div>
                <h2 className="UserInfo__title">Julie Taylor</h2>
                <p className="UserInfo__text">VP of Marketing</p>
            </div>
        </div>
    );
};

export default UserInfo;