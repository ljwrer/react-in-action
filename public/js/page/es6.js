/**
 * Created by Ray on 2016/4/27.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from "module/es6/Counter";
import {StateLess} from "module/es6/stateless";
ReactDOM.render(
    <div>
        <Counter/>
        <StateLess name="Ray"/>
    </div>
    ,document.getElementById("container"));