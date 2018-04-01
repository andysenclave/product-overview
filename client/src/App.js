import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Products from './components/Product/products';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React/Redux Express Starter</h1>
          </header>
          <Products/>
        </div>
      </Provider>
    );
  }
}

export default App;
