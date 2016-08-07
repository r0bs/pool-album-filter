import React, { Component } from 'react'; 
import ProductListItem from './listitem';

class ProductList extends Component {

	constructor(props) {
		super(props);

	    this.products = [];
	    this.retrieved = [];
	}

	request(method, url) {
	    return new Promise((resolve, reject) => {
	        var xhr = new XMLHttpRequest();
	        xhr.open(method, url);
	        xhr.onload = resolve;
	        xhr.onerror = reject;
	        xhr.send();
	    });
	}

	componentDidMount() {
		this.getData();
		
	}

	shouldComponentUpdate() {	
		return true;
	}
	
	getData() {
		return new Promise((resolve, reject) => {
	  		this.request('GET', "/data.json")
	  		.then(data => {
				this.retrieved = JSON.parse(data.target.response);
			})
			.catch(data => {
				console.error("Data retrieval failed!\n\n", data);
			});
		});
  	}


  	sortData() {

  		if(this.props.filterText.length >= 2) {

	  		let products = [];

			this.retrieved.forEach((product) => {

				if (product.artist.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1 &&
					product.title.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1 &&
					product.ean.indexOf(this.props.filterText) !== 0) {
					return;
				}	
				else {
					products.push(<ProductListItem key={product.id} data={product}/>);
				}

			});

			this.products = products;

		} else {
			this.products = [];
		}
  	}


    render() {
    	this.sortData();
        return ( 

        	<div className="ProductList">	            
	        	{this.products}
            </div>
        );
    }
}

export default ProductList;
