var React = require('react');
var ReactDOM = require('react-dom');
var $=require('jquery');
var CommentList = require('./commentList');
var CommentForm = require('./commentForm');
var CommentBox = React.createClass({
    getInitialState: function () {
        return {data:[]};
    },
    loadCommentsFromServer:function(){
        $.getJSON(this.props.url,(function(data){
            this.setState({data:data});
        }).bind(this));
    },
    handleCommentSubmit: function(comment) {
        var comments=this.state.data;
        comment.id=Date.now();
        var newComments=comments.concat([comment]);
        this.setState({data:newComments});
        // TODO: submit to the server and refresh the list
        $.ajax({
            url:this.props.url,
            method:"post",
            data:comment,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({data:comments});
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount:function(){
        this.loadCommentsFromServer();
        //this.props.pollInterval&&setInterval(this.loadCommentsFromServer,this.props.pollInterval)
    },
    render: function () {
        return <div className="commentBox">
            <h1>commentBox</h1>
            <CommentList data={this.state.data}/>
            <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        </div>
    }
});
module.exports = CommentBox;