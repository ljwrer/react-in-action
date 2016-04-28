"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
const TestEventPooling = React.createClass({
    handleClick: event=> {
        console.log(event);
        console.log(event.target);
        const saveTarget = event.target;
        setTimeout(()=> {
            console.log(event);
            console.log(event.target);
            console.log(saveTarget);
        }, 1000);
    },
    render: function () {
        return <button onClick={this.handleClick}>show event</button>
    }
});
const ControlledComponent = React.createClass({
    getInitialState: function () {
        return {
            value: "hello"
        }
    },
    handleChange: function (event) {
        const value = event.target.value;
        this.setState({
            value: value.slice(0, 10)
        });
    },
    render: function () {
        return <input value={this.state.value} onChange={this.handleChange}/>
    }
});
const TestRadioBug = React.createClass({
    getInitialState(){
        return {
            checked: false
        }
    },
    handleChange(event){
        event.preventDefault();
        setTimeout(()=>{
            this.setState({
                checked:!this.state.checked
            })
        })
    },
    render(){
        return <input type="radio" checked={this.state.checked} onChange={this.handleChange}/>
    }
});
const UnControlledComponent=React.createClass({
    render() {
        return (
            <div>
                <input type="radio" name="opt" defaultChecked /> Option 1
                <input type="radio" name="opt" /> Option 2
                <select defaultValue="C">
                    <option value="A">Apple</option>
                    <option value="B">Banana</option>
                    <option value="C">Cranberry</option>
                </select>
            </div>
        );
    }
});
ReactDOM.render(<div>
    <TestEventPooling/>
    <ControlledComponent/>
    <TestRadioBug/>
    <UnControlledComponent/>
</div>, document.getElementById("container"));