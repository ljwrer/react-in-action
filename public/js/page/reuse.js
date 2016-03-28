var React=require("react");
var ReactDOM=require("react-dom");
var CheckLink = React.createClass({
    propTypes: {
        "data-mine": React.PropTypes.string.isRequired,
        children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
    },
    render: function() {
        // This takes any props passed to CheckLink and copies them to <a>
        return <a {...this.props}>{'√ '}{React.Children.map(this.props.children, function (child) {
            return <li>{child}</li>;
        })}</a>;
    }
});

ReactDOM.render(
    <CheckLink href="/checked.html" data-mine="hello">
        <span>hello</span>
        <span>world</span>
    </CheckLink>,
    document.getElementById('example')
);