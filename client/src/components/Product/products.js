import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/product'
import './products.css';

class Products extends Component {

  static propTypes = {
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
  }

  static defaultProps = {
    products: []
  }

  componentWillMount() {
    this.props.getProducts();
  }

  render() {

    return (
      <div>
        <h2>Products</h2>
        <ul>
        {this.props.products.map(product =>
          <li key={product._id}>{product.name}</li>
        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

const dispatchToProps = (dispatch) => ({
   getProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, dispatchToProps)(Products);