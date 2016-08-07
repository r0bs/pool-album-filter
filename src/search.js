import React, { Component } from 'react';

class SearchField extends Component {

	handleSearchInput() {
		this.props.onUserInput(this.refs.filterTextInput.value);
	}

	render() {
	    return (
			<form>
			<input
				id="searchbox"
				type="text"
				className="search"
				placeholder="Suche nach Interpret, Titel, EAN..."
				value={this.props.filterText}
				ref="filterTextInput"
				onChange={this.handleSearchInput.bind(this)}
				autoFocus
				/>
				<br /><br />
			</form>
	    );
	}

}

export default SearchField;
