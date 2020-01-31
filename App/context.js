import React, {Component} from 'react';
import {pizzas, detailPizza, detail} from "./data";

const pizzaContext = React.createContext();
//provider
//consumer

class pizzaProvider extends Component {
    state ={
        pizzas:[],
        detail:detail,
        cart: [],
        cartSubTotal: 0,
        cartTotal: 0,
    };
    componentDidMount(){
        this.setpizzas();
    };
    setpizzas = () => {
        let temppizzas = [];
        pizza.forEach(item => {
            const singleItem = {...item};
            temppizzas = [...temppizzas,singleItem];

        });
        this.setState(()=>{
            return {pizzas: temppizzas};
        })
    };

    getItem = (id) =>{
        const pizza = this.state.pizzas.find(item => item.id ===id);
        return pizza;
    }

    handleDetail = (id) => {
        const pizza = this.getItem(id);
        this.setState(()=>{
            return {detailPizza:pizza};
        })
    };
    addToCart = (id) => {
        let temppizzas = [...this.state.pizzas];
        const index = temppizzas.indexOf(this.getItem(id));
        const pizza = temppizzas[index];
        pizza.inCart = true;
        pizza.count = 1;
        const price = pizza.price;
        pizza.total = price;
        this.setState(() => {
            return {pizzas:temppizzas,cart:[...this.state.cart,pizza] };
        },()=>{
            this.addTotals();
        });
    };
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedPizza = tempCart.find(item=>item.id === id)

        const index = tempCart.indexOf(selectedPizza);
        const pizza = tempCart[index];

        pizza.count = pizza.count + 1;
        pizza.total = pizza.count * pizza.price;

        this.setState(() => {return{cart:[...tempCart]}},
            ()=>{
                this.addTotals();
            });

    };
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedPizza = tempCart.find(item=>item.id === id)

        const index = tempCart.indexOf(selectedPizza);
        const pizza = tempCart[index];
        pizza.count = pizza.count -1;

        if(pizza.count === 0){
            this.removeItem(id)
        }
        else {
            pizza.total = pizza.count * pizza.price;

            this.setState(() => {return{cart:[...tempCart]}},
                ()=>{
                    this.addTotals();
                });
        }
    };
    removeItem = (id) => {
        let temppizzas = [...this.state.pizzas];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = temppizzas.indexOf(this.getItem(id))
        let removedpizza = temppizzas[index];
        removedpizza.inCart = false;
        removedpizza.count = 0;
        removedpizza.total = 0;

        this.setState(()=>{
            return{
                cart:[...tempCart],
                pizzas:[...temppizzas]
            }
        }, ()=> {
            this.addTotals();
        });
    }
    clearCart = () =>{
        this.setState(()=>{
            return { cart: [] };
        }, ()=>{
            this.setpizzas();
            this.addTotals();
        });
    };
    addTotals = () =>{
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.21;
        const tax = parseFloat(tempTax.toFixed(1));
        const total = subTotal + tax;
        this.setState(() => {
            return{
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            };
        });
    };

    render() {
        return (
            <pizzaContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                increment:this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
            }}>
                {this.props.children}
            </pizzaContext.Provider>
        );
    }
}

const pizzaConsumer = pizzaContext.Consumer;

export {pizzaProvider,pizzaConsumer};