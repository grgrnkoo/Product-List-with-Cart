import React, { useEffect, useState } from "react";
import CartPiece from "./CartPiece";

export default function ProductGrid({ items, data, incrementProduct, decrementProduct }) {

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        setCategories((prev) => {
            let updatedCategories = [...prev];
            data.forEach((item) => {
                if (!updatedCategories.includes(item.category)) {
                    updatedCategories.push(item.category);
                }
            });
            return updatedCategories;
        })
    }, []);

    return (
        <div className="productGrid">
            <div className="topLine">
                <h2>Desserts</h2>
                <select name="Category" id="Category" onChange={(e) => {
                    setCategory(e.target.value);
                }}>
                    <option value='' key='any' >Category</option>
                    {
                        categories.map((category) => {

                            return (
                                <option value={category} key={category} >{category}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="grid">
                {
                    category === '' ?
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
                        }) : data.map((product) => {
                            if (product.category === category) {
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
                            }
                        })
                }
            </div>
        </div>
    )
}