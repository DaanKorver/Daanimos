import React, {Component} from 'react';


class Pizza extends Component {
    state = {
        pizzaPrice: this.props.price,
        size: 'regular',
    }
    constructor(props) {
        super(props);
    }

    changePrice(price, size) {
        this.setState((state, props) => ({
            pizzaPrice: this.props.price + price,
            size: this.state.size = size
        }))
    }

    render() {
        return (
            <div>
                <Image
                    style={{width: 250, height: 250}}
                    source={require('../assets/' + this.props.flavour + '.jpg')}
                />
                <h3>Prijs: ${this.state.pizzaPrice}</h3>
                <h4>Grootte: {this.state.size}</h4>
                <button onClick={() => this.changePrice(0, 'regular')}>Original</button>
                <button onClick={() => this.changePrice(2.50, 'medium')}>Medium 2.50</button>
                <button onClick={() => this.changePrice(3, 'big')}>Big boi 3</button>
            </div>
        );
    }
}

export default Pizza;