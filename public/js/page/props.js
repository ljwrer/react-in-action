/**
 * Created by Ray on 2016/4/28.
 */
"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var FancyCheckbox = React.createClass({
    render: function() {
        // var {checked,...other}=this.props;
        var { checked, ...other } = this.props;
        var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
        return (
            <div {...other} checked={checked} className={fancyClass} >
                {this.props.children}
            </div>
        );
    }
});
ReactDOM.render(
    <FancyCheckbox checked={true} title={"fancy"} type={"checkbox"} onClick={console.log.bind(console)}>
        Hello world!
    </FancyCheckbox>,
    document.getElementById("container")
);