import React from 'react';

export default function Succes({value}){
    const{cartSubTotal,cartTax,cartTotal,clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger
                       text-uppercase mb-3 px-5" type="button"
                                    onClick={() => clearCart()}>
                                Clear cart
                            </button>
                        </Link>
                        <h5>
                       <span className="text-title">
                           Subtotaal:
                       </span>
                            <strong>€ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                       <span className="text-title">
                           Belasting:
                       </span>
                            <strong>€ {cartTax}</strong>
                        </h5>
                        <h5>
                       <span className="text-title">
                           Totaal:
                       </span>
                            <strong>€ {cartTotal}</strong>
                        </h5>
                    </div>
                    <div className="col-12 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/form">
                            <button className="btn btn-outline-primary
                       text-uppercase mb-3 px-5" type="button">
                                Doorgaan
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}