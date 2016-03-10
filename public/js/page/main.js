/**
 * Created by Ray on 2016/3/7.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox=require('./../module/comment/commentBox');
require("./../../sass/style.scss");
var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
//ReactDOM.render(
//    <CommentBox data={data}/>,
//    document.getElementById('example')
//);
ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval={2000}/>,
    document.getElementById('example')
);
