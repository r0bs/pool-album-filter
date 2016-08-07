import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import ProductList from './list';
import SearchField from './search';


class App extends Component {

  constructor() {
    super();
    this.state = {filterText: '' };
  }

  handleUserInput(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchField
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)}
        />
        <ProductList 
          filterText={this.state.filterText}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
