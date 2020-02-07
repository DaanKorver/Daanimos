import React, {Component} from 'react';
import {products} from "./data";

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
    // Set state
    state ={
        products:[],
        cart: [],
        cartTotal: 0,
    };
    // Mount component
    componentDidMount(){
        this.setProducts();
    };
    // Set products in cart
    setProducts = () => {
        let tempProducts = [];
        products.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];

        });
        this.setState(()=>{
            return {products: tempProducts};
        })
    };

    // Get item with id
    getItem = (id) =>{
        const product = this.state.products.find(item => item.id ===id);
        return product;
    }

    // Add product to cart
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {products:tempProducts,cart:[...this.state.cart,product] };
        },()=>{
            this.addTotals();
        });
    };

    // Add item toc art
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id === id)

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {return{cart:[...tempCart]}},
            ()=>{
                this.addTotals();
            });

    };

    // Decrement product in cart
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id === id)

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count -1;

        if(product.count === 0){
            this.removeItem(id)
        }
        else {
            product.total = product.count * product.price;

            this.setState(() => {return{cart:[...tempCart]}},
                ()=>{
                    this.addTotals();
                });
        }
    };

    // Remove an item from cart
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(()=>{
            return{
                cart:[...tempCart],
                products:[...tempProducts]
            }
        }, ()=> {
            this.addTotals();
        });
    }

    // Clear the whole cart
    clearCart = () =>{
        this.setState(()=>{
            return { cart: [] };
        }, ()=>{
            this.setProducts();
            this.addTotals();
        });
    };

    // Add to totals
    addTotals = () =>{
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        this.setState(() => {
            return{
                cartTotal: subTotal
            };
        });
    };

    // Render the provider
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart:this.addToCart,
                increment:this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

// Export a var as consumer
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};