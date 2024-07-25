import React, { useEffect } from "react";
import './Confirmation.css';

import confirmationIcon from '../images/icon-order-confirmed.svg';

export default function Confirmation({ cart, isShowing, setVisibility, totalSum, deleteCart }) {

    function onClickCallBack(target) {
        const modal = document.querySelector('.modal');
        const bgModal = document.querySelector('.bgModal.active');
        if (target === bgModal && target !== modal) {
            setVisibility(false);
        };
    }

    useEffect(() => {
        if (isShowing) {
            window.addEventListener('click', ({ target }) => {
                onClickCallBack(target);
            }
            );
        }
        return (
            window.removeEventListener('click', ({ target }) => {
                if (isShowing) {
                    onClickCallBack(target)
                }
            })
        )
    }, [isShowing])


    return (
        <div className={isShowing ? 'bgModal active' : 'bgModal hidden'}>
            <div className={isShowing ? 'modal active' : 'modal hidden'}>
                <img src={confirmationIcon} alt="Order Confirmed" />
                <h2>Order Confirmed</h2>
                <p>We hope you enjoy your food!</p>
                <div className="productListModal">
                    {
                        cart.map((item) => {
                            if (item.quantity > 0) {
                                return (
                                    <div className="productModal">
                                        <div className="productInfo">
                                            <img src={item.image} alt={item.name} />
                                            <div>
                                                <span className="modalProductName">{item.name}</span>
                                                <div className="priceInfo">
                                                    <span className="red">{item.quantity + 'x'}</span>
                                                    <span className="lightBrown">{'@ $' + item.price.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="totalProduct">{'$' + (item.quantity * item.price).toFixed(2)}</p>
                                    </div>
                                )
                            }
                        })
                    }
                    <div className="orderTotal">
                        <span>Order Total</span>
                        <p className="totalSum">{'$' + totalSum().toFixed(2)}</p>
                    </div>
                </div>
                <button className="confirm" onClick={() => {
                    console.log('hooray');
                    deleteCart();
                    setVisibility(false);
                }
                }>Start New Order</button>
            </div>
        </div>
    )
}