/**
 * Created by Ray on 2016/4/27.
 */
import React from 'react';
import {StateLess} from "./stateless";
export class Counter extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            counter:props.initialCounter
        };
        this.tick=this.tick.bind(this);
    }
    tick(){
        this.setState({
            counter:this.state.counter+1
        });
    }
    render(){
        return <div onClick={this.tick}>
            <StateLess name="Ray"/>
            Clicks:{this.state.counter}</div>
    }
}
Counter.propTypes={
    initialCounter:React.PropTypes.number
};
Counter.defaultProps={
    initialCounter:0
};
