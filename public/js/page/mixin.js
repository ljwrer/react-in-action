/**
 * Created by Ray on 2016/4/27.
 */
var React=require("react");
var ReactDOM=require("react-dom");
var setIntervalMixin={
    componentWillMount:function () {
        this.intervalIds=[];
    },
    setInterval:function () {
        this.intervalIds.push(setInterval.apply(null,arguments));
    },
    componentWillUnmount:function () {
        this.intervalIds.forEach(clearInterval)
    }
};
var TikTok=React.createClass({
    mixins:[setIntervalMixin],
    getInitialState:function () {
        return {
            seconds:0
        }
    },
    componentDidMount:function () {
        this.setInterval(()=>{
            this.setState({
                seconds:this.state.seconds+1
            })
        });
    },
    render:function () {
        return <p>{this.state.seconds}</p>
    }
});
ReactDOM.render(<TikTok/>,document.getElementById("container"));
