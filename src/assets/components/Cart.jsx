import React, { useEffect, useState } from "react";
import ProductInCart from './ProductInCart';
import Confirmation from "./Confirmation";
import emptyCartImage from '../images/illustration-empty-cart.svg';
import ecoImage from '../images/icon-carbon-neutral.svg'

export default function Cart({ cart, deleteFromCart, deleteCart }) {

    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (modal) {
            document.body.classList.add("overflow-y-hidden")
          } else {
            document.body.classList.remove("overflow-y-hidden")
          }
    }, [modal]);

    function totalItems() {
        let sum = 0;
        for (const product of cart) {
            sum += product.quantity
        }
        return sum;
    }

    function totalSum() {
        let sum = 0;
        for (const product of cart) {
            sum += product.quantity * product.price;
        }
        return sum;
    }

    return (
        <div className="cart">
            <h2 className="cartTitle">Your Cart ({totalItems()})</h2>
            {
                totalItems() === 0 ?
                    <div className="emptyCart">
                        <img src={emptyCartImage} alt='Empty Cart Signal' />
                        <span>Your added items will appear here</span>
                    </div> :
                    <>
                        {
                            cart.map((item) => {
                                return (
                                    <>
                                        {(item.quantity > 0) &&
                                            <ProductInCart
                                                key={'cart-' + item.id}
                                                id={item.id}
                                                name={item.name}
                                                price={item.price}
                                                quantity={item.quantity}
                                                deleteFromCart={() => deleteFromCart(item.id)}
                                            />}
                                    </>
                                )
                            })
                        }

                        <div className="orderTotal">
                            <span>Order Total</span>
                            <p className="totalSum">{'$' + totalSum().toFixed(2)}</p>
                        </div>
                        <div className="ecoFriendly">
                            <img src={ecoImage} alt="Carbon-Neutral" />
                            <p>This is a <span className="bold">carbon-neutral</span> delivery</p>
                        </div>
                        <button className="confirm" onClick={() => {
                            setModal(true);
                        }}>Confirm Order</button>
                    </>
            }
            <Confirmation 
                cart={cart} 
                isShowing={modal} 
                setVisibility={setModal} 
                totalSum={totalSum} 
                deleteCart={deleteCart}
            />
        </div>
    )
}