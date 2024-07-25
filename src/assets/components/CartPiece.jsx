import React, { useState, useEffect } from 'react';
import AddToCart from './AddToCart';


export default function CartPiece({ quantity, image, name, category, price, incrementProduct, decrementProduct }) {
    const [inCart, setInCart] = useState(false);

    return (
        <div className='cartPiece'>
            <div className='imageBox'>
                <picture>
                    <source srcSet={image.mobile} media='(max-width: 500px)' />
                    <source srcSet={image.tablet} media='(max-width: 800px)' />
                    <img src={image.desktop} alt={`${name} image`} style={inCart ? { outline: '2px solid var(--red)' } : { outline: 'none' }} />
                </picture>
                <AddToCart
                    incrementProduct={incrementProduct}
                    decrementProduct={decrementProduct}
                    quantity={quantity}
                    handleClick={setInCart}
                    inCart={inCart}
                />
            </div>
            <span className='category'>{category}</span>
            <h3>{name}</h3>
            <span className='price'>{'$' + price.toFixed(2)}</span>
        </div>
    )
}