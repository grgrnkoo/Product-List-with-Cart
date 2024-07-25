import React from "react";
import removeItemIcon from '../images/icon-remove-item.svg'

export default function ProductInCart(props) {
    const { price, name, quantity, id, deleteFromCart } = props;

    return (
        <div className="productInCart">
            <div className="productInCartName">
                <span className="name">{name}</span>
                <div className="priceInfo">
                    <span className="quantity">{quantity + 'x'}</span>
                    <span className="pricePerOne">{'@ $' + price.toFixed(2)}</span>
                    <span className="pricePerAll">{'$' + (price * quantity).toFixed(2)}</span>
                </div>
            </div>
            <img src={removeItemIcon} alt='Remove from cart' onClick={deleteFromCart} />
        </div>
    )
}