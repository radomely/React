import React from "react";
import Header from "../Header/Header";
import EmployeeList from "../EmployeeList/EmployeList";

import "./HomePage.css";

const HomePage = () => {
    const arr = [
        {
            name: 'James',
            surname: 'King',
            position : 'President and CEO',
        },
        {
            name : 'Julie',
            surname : 'Taylor',
            position : 'VP of Marketing',
        },
        {
            name: 'Eugene',
            surname: 'Lee',
            position: 'CFO',
        },
        {
            name: 'John',
            surname: 'Williams',
            position: 'VP of Engineering',
        },
        {
            name: 'Ray',
            surname: 'Moore',
            position: 'VP of Sales'
        },
        {
            name: 'Paul',
            surname: 'Jones',
            position: 'QA Manager',
        }
    ];
    return(
        <div className="HomePage">
            <Header text = "Employee Directory"/>
            <EmployeeList userData = {arr}/>
        </div>
    );
};

export default HomePage;