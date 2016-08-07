import React, { Component } from 'react'; 

class Category extends Component {

    render() {
        return (
        	<span className="tag tag-default" style="margin-right: 5px;">{this.props.data}</span>
        );
    }
}

export default Category;
