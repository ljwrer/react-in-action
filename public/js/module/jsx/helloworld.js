var React=require("react");
var HelloWolrd=React.createClass({
   render:function(){
       return (
           <p>
               Hello, <input type="text" placeholder="Your name here" />!
               It is {this.props.date.toTimeString()}
           </p>
       )
   }
});
module .exports=HelloWolrd;