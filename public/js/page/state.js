/**
 * Created by Ray on 2016/3/8.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var ProductCategoryRow = React.createClass({
    render: function() {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    }
});

var ProductRow = React.createClass({
    render: function() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
        return (
                <tr><td>{name}:<span>{this.props.product.price}</span></td></tr>
        );
    }
});

var ProductTable=React.createClass({
    render:function () {
        var list = this.props.products.map(function (product) {
            return <ProductRow  product={product} key={product.name} />;
        });
        return <tbody>
            <ProductCategoryRow category={this.props.category}/>
            {list}
        </tbody>
    }
});

var ProductTableList = React.createClass({
    render: function() {
        var rows = [];
        var products=this.props.products.filter(product=>
            !(product.name.indexOf(this.props.filterText) === -1 ||(!product.stocked&&this.props.inStockOnly)));
        var categoryList={};
        let i=0;
        products.forEach(product=>{
            let category=product.category;
            if (!categoryList.hasOwnProperty(category)){
                categoryList[category]=[];
                categoryList[category].key=i++;
            }
            categoryList[category].push(product);
        });
        console.log(categoryList)
        for (let category in categoryList){
            if(categoryList.hasOwnProperty(category)){
                rows.push(
                    <ProductTable category={category} products={categoryList[category]} key={categoryList[category].key}/>
                )
            }
        }
        // var lastCategory = null;
        // this.props.products.forEach(function(product) {
        //     if(product.name.indexOf(this.props.filterText) === -1 ||(!product.stocked&&this.props.inStockOnly)){
        //         return
        //     }
        //     if (product.category !== lastCategory) {
        //         rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        //     }
        //     rows.push(<ProductRow product={product} key={product.name} />);
        //     lastCategory = product.category;
        // }.bind(this));
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                {rows}
            </table>
        );
    }
});

var Line=React.createClass({
    handleClick:function(){
        this.props.onUserClick(this.props.children,false);
    },
    render:function(){
        return <p onClick={this.handleClick}>{this.props.children}</p>
    }
});

var SearchBar = React.createClass({
    handleInput:function(){
        this.props.onUserInput(this.refs.filterTextInput.value, this.refs.inStockOnlyInput.checked);
    },
    render: function() {
        return (
            <form>
                <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleInput} />
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly} ref="inStockOnlyInput" onChange={this.handleInput}/>
                    {' '}
                    Only show products in stock
                </p>
                <Line onUserClick={this.props.onUserInput}>ball</Line>
                <Line onUserClick={this.props.onUserInput}>i</Line>
            </form>
        );
    }
});

var FilterableProductTable = React.createClass({
    getInitialState:function(){
        return {
            filterText: '',
            inStockOnly: false
        };
    },
    handleUserInput:function(filterText,inStockOnly){
        this.setState({
            filterText:filterText,
            inStockOnly:inStockOnly
        })
    },
    render: function() {
        return (
            <div>
                <SearchBar onUserInput={this.handleUserInput} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
                <ProductTableList filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} products={this.props.products} />
            </div>
        );
    }
});


var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'tennisBall'},
];

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('container')
);
