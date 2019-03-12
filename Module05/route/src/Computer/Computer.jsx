import React from 'react';
import {NavLink} from 'react-router-dom';
import Image from '../Image/Image';
import Description from '../Description/Description';
import History from '../History/History';
import {Switch, Route} from 'react-router-dom';

const Computer = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Компью́тер</h2>
            <p>англ. computer, МФА: [kəmˈpjuː.tə(ɹ)][1] — «вычислитель») — устройство или система, способная выполнять заданную, чётко определённую, изменяемую последовательность операций. Это чаще всего операции численных расчётов и манипулирования данными, однако сюда относятся и операции ввода-вывода. Описание последовательности операций называется программой[2]. </p>
            <ul>
                <li>
                    <NavLink to={`${props.match.path}/Image`}>Image</NavLink>
                </li>
                <li>
                    <NavLink to={`${props.match.path}/Description`}>Description</NavLink>
                </li>
                <li>
                    <NavLink to={`${props.match.path}/History`}>History</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path={`${props.match.path}/Image`} component={Image}/>
                <Route path={`${props.match.path}/Description`} component={Description}/>
                <Route path={`${props.match.path}/History`} component={History}/>
            </Switch>
        </div>
    );
};

export default Computer;