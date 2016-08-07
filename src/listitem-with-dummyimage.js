import React, { Component } from 'react'; 

class ProductListItemWithDummyImage extends Component {


    render() {

	        return ( 
	        	<div className="card">
				  <div className="card-block">
				    <h4 className="card-title">{this.props.data.title}</h4>
				    <h6 className="card-subtitle text-muted">{this.props.data.artist}</h6>
				  </div>
				  <img 	src={'./img/redcd.png'} 
				  		alt={this.props.data.artist + " - " + this.props.data.description}
		  			 />
				  <div className="card-block">
				  	<span className="tag tag-danger">{this.props.data.category}</span>
				    <p className="card-text">{this.props.data.description}</p>
				    <span className="card-link">{this.props.data.id}</span>
				    <span className="card-link">{this.props.data.ean}</span>
				  </div>
				</div>
	        );
    	}
}

export default ProductListItemWithDummyImage;
