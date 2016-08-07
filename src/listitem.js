import React, { Component } from 'react'; 
import ProductListItemWithDummyImage from './listitem-with-dummyimage';

class ProductListItem extends Component {

	constructor() {
		super();
		this.state = {imageMiss: false};
	}

	handleMissingFile() {
		this.setState({imageMiss: true})
	}

    render() {
    	if (this.state.imageMiss) {
		    return ( 
		    	<ProductListItemWithDummyImage key={this.props.data.id} data={this.props.data}/>
	    	);	
		} else {
	        return ( 
	        	<div className="card">
				  <div className="card-block">
				    <h4 className="card-title">{this.props.data.title}</h4>
				    <h6 className="card-subtitle text-muted">{this.props.data.artist}</h6>
				  </div>
				  <img 	src={'./cover_w300/' + this.props.data.ean + '.jpg'} 
				  		alt={this.props.data.artist + " - " + this.props.data.description}
				  		onError={this.handleMissingFile.bind(this)}
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
}

export default ProductListItem;
