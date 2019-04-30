import React from "react";
import Header from "../Header/Header"
import EmployerInfo from "../EmployerInfo/EmployerInfo";
import "./EmployerPage.css";

const EmployerPage = () => {
    return(
        <div className="EmployerPage">
            <Header text = "Employee"/>
            <EmployerInfo/>
        </div>
    );
}

export default EmployerPage;