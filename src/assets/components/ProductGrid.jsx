import React, { useEffect, useState } from "react";
import CartPiece from "./CartPiece";

export default function ProductGrid({ items, data, incrementProduct, decrementProduct }) {

    return (
        <div className="productGrid">
            <h2>Desserts</h2>
            <div className="grid">
                {
                    data.map((product) => {
                        return <CartPiece 
                            key={'grid-' + product.id}
                            id={product.id}
                            image={product.image} 
                            name={product.name} 
                            category={product.category}
                            price={product.price}
                            quantity={items.find(item => item.id === product.id).quantity}
                            incrementProduct={() => incrementProduct(product.id)}
                            decrementProduct={() => decrementProduct(product.id)}
                        />
                    })
                }
            </div>
        </div>
    )
}