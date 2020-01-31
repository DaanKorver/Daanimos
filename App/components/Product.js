import React, {Component} from 'react';
import {pizzaConsumer} from "../context";
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        const {id, title, price, inCart} = this.props.pizza;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <pizzaConsumer>
                        {(value) => (
                            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                                <button className="cart-btn" disabled={inCart ? true:false} onClick={
                                    () => {value.addToCart(id);}
                                }>
                                    {inCart?(<p className="text-capitalize mb-0" disabled>In cart</p>):(
                                        <i className="fas fa-cart-plus"/>)}
                                </button>
                                <Text></Text>
                            </div>
                        )}
                    </pizzaConsumer>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
    }).isRequired
};


export default Product;