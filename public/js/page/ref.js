/**
 * Created by Ray on 2016/4/29.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const FocusInput = React.createClass({
    render(){
        return  <div>
            <input ref={function(input) {
                if(input!=null){
                    input.focus();
                }
            }}/>
            <input ref={(ref)=>{this.myInput=ref}}/>
            <input ref="anotherInput"/>
        </div>
    }
});
ReactDOM.render(<div>
    <FocusInput/>
</div>, document.getElementById("container"));