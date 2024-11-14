import { useState } from 'react';
import { useCookies } from 'react-cookie';

const Cart = () => {
  const [cookies, setCookie] = useCookies(['cart']);
  const [cart, setCart] = useState(cookies.cart || []);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    setCookie('cart', updatedCart, { path: '/' });
  };

  return (
    <div>
      <button onClick={() => addToCart({ id: 1, name: 'Product 1' })}>Add to Cart</button>
      <h3>Your Cart:</h3>
      {cart.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
};

export default Cart;
