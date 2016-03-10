var React = require('react');
var ReactDOM = require('react-dom');
var Comment=require("./comment");
var CommentList=React.createClass({
    render:function(){
        var comments=this.props.data.map(function(comment,index){
            return <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
        });
        return <div className="commentList">
            {comments}
        </div>
    }
});
module.exports=CommentList;