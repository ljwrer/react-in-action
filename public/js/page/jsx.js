var React=require("react");
var ReactDOM=require("react-dom");
var HelloWorld=require("module/jsx/helloworld");
var Factory = React.createFactory(HelloWorld);
var root = Factory({ date: new Date() });
//var root = React.DOM.ul({ className: 'my-list' },
//    React.DOM.li(null, 'Text Content')
//);
var BooleanComp=React.createClass({
    render:function () {
        return <input type="button" disabled={false} />
    }
})



ReactDOM.render(<div>
    <BooleanComp/>
    <div>First &middot; Second</div>
    {root}</div>, document.getElementById('container'));
// ReactDOM.render(
//     <HelloWorld date={new Date()}/>
//     , document.getElementById("container")
// );