import React from "react";
import iconAddToCart from "../images/icon-add-to-cart.svg";
import iconIncrementProduct from "../images/icon-increment-quantity.svg";
import iconDecrementProduct from "../images/icon-decrement-quantity.svg";

export default function AddToCart({ quantity, incrementProduct, decrementProduct, id, handleClick, inCart }) {
    return (
        quantity === 0 ?
            <div className="addToCart inactive" onClick={() => {
                if (quantity === 0) {
                    handleClick(true)
                }
                incrementProduct();
            }
            }>
                <img src={iconAddToCart} alt="Add to Cart" />
                <span className="clickable">Add to Cart</span>
            </div> :
            <div className={inCart ? 'addToCart active' : 'addToCart'}>
                <div className="hoverDiv">
                    <img
                        src={iconIncrementProduct}
                        alt="Increment quantity"
                        onClick={incrementProduct}
                        className="clickable"
                    />
                </div>
                <span style={inCart ? { color: 'var(--white)' } : { color: 'black' }}>{quantity}</span>
                <div className="hoverDiv">
                    <img
                        src={iconDecrementProduct}
                        alt="Decrement quantity"
                        onClick={() => {
                            if (quantity === 1) {
                                handleClick(false)
                            }
                            decrementProduct();
                        }
                        }
                        className="clickable"
                    />
                </div>
            </div>
    )
}