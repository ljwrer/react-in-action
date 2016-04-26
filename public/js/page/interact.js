/**
 * Created by Ray on 2016/3/10.
 */
var React=require("react");
var ReactDOM=require("react-dom");
var LikeButton = React.createClass({
    getInitialState: function() {
        return {liked: false};
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    render: function() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
                <span>{this.props.children}</span>
            </p>
        );
    },
    componentDidMount:function(){
        React.Children.forEach(this.props.children,function(item){
           console.log("......LikeButton did mount......")
            console.log(item.props.pagename)
        });
    }
});
var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <PagePic pagename={this.props.pagename} />
                <PageLink pagename={this.props.pagename} />
                <LikeButton><PageLink pagename={this.props.pagename} /></LikeButton>
            </div>
        );
    }
});

var PagePic = React.createClass({
    render: function() {
        return (
            <img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'} />
        );
    }
});

var PageLink = React.createClass({
    render: function() {
        return (
            <a href={'https://www.facebook.com/' + this.props.pagename}>
                {this.props.pagename}
            </a>
        );
    }
});

ReactDOM.render(
    <Avatar pagename="Engineering" />,
    document.getElementById('container')
);