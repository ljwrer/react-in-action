const React=require("react");
const ReactDOM=require("react-dom");
const CheckLink = React.createClass({
    propTypes: {
        "data-mine": React.PropTypes.string.isRequired,
        children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
    },
    getDefaultProps:function () {
        return {
            "data-mine":"default data-mine",
            children:[<span>default element</span>],
            href:"/"
        }
    },
    render: function() {
        // This takes any props passed to CheckLink and copies them to <a>
        return <a {...this.props}>{'√ '}{React.Children.map(this.props.children, function (child) {
            return <li>{child}</li>;
        })}</a>;
    }
});
const Container=React.createClass({
    render:function () {
        return <div>
            <CheckLink href="/checked.html" data-mine="hello">
                <span>hello</span>
                <span>world</span>
            </CheckLink>
            <CheckLink/>
        </div>
    }
});

ReactDOM.render(
    /*<CheckLink href="/checked.html" data-mine="hello">
        <span>hello</span>
        <span>world</span>
    </CheckLink>,*/
    <Container/>,
    document.getElementById('container')
);