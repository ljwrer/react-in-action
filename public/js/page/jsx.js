var React=require("react");
var ReactDOM=require("react-dom");
var HelloWorld=require("module/jsx/helloworld");
var Factory = React.createFactory(HelloWorld);
var root = Factory({ date: new Date() });
//var root = React.DOM.ul({ className: 'my-list' },
//    React.DOM.li(null, 'Text Content')
//);
ReactDOM.render(root, document.getElementById('container'));
ReactDOM.render(
    (<HelloWorld date={new Date()}></HelloWorld>
    ),
    document.getElementById("container")
);