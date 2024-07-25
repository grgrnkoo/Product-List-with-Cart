import React, { useEffect, useState } from 'react';
import './App.css';
import data from './data.json';
import ProductGrid from './assets/components/ProductGrid';
import Cart from './assets/components/Cart';

const addId = () => {
  let productId = 0;
  data.forEach((product) => {
    product.id = productId;
    productId++;
  });
}

addId();

function App() {
  const [cart, setCart] = useState(data.map((product) => {
    return {
      quantity: 0,
      price: product.price,
      name: product.name,
      id: product.id,
      image: product.image.thumbnail
    }
  }));

  function incrementProduct(updatingId) {
    const nextCart = cart.map((item) => {
      if (item.id === updatingId) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item;
    });
    setCart(nextCart);
  }

  function decrementProduct(updatingId) {
    const nextCart = cart.map((item) => {
      if (item.id === updatingId) {
        if (item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 }
        } 
        return item;
      }
      return item;
    });
    setCart(nextCart);
  }

  function deleteFromCart(updatingId) {
    const nextCart = cart.map((item) => {
      if (item.id === updatingId) {
        if (item.quantity > 0) {
          return { ...item, quantity: 0 };
        } 
        return item;
      }
      return item;
    });
    setCart(nextCart);
  }

  function deleteCart() {
    const nextCart = cart.map((item) => {
        if (item.quantity > 0) {
          return { ...item, quantity: 0 };
        } 
        return item;
    });
    setCart(nextCart);
  }

  return (
    <>
      <ProductGrid 
        items={cart} 
        data={data} 
        incrementProduct={incrementProduct}
        decrementProduct={decrementProduct}
        deleteFromCart={deleteFromCart}
     />
      <Cart 
        cart={cart}
        deleteFromCart={deleteFromCart} 
        deleteCart={deleteCart} 
      />
    </>
  )
}

export default App
