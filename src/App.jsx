import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    const foodInCart = cart.find((item) => item.id === product.id);
    if (foodInCart) {
      const cartUpdate = cart.map((item) =>
        item.id === product.id
          ? { ...foodInCart, quantity: foodInCart.quantity + 1 }
          : item
      );
      setCart(cartUpdate);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleIncrease = (product) => {
    const foodInCart = cart.find((item) => item.id === product.id);
    if (foodInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
          ? { ...foodInCart, quantity: foodInCart.quantity + 1 }
          : item
        )
      );
    }
  };

  const handleDecrease = (product) => {
    const selectedItem = cart.find((item) => item.id === product.id);
    if (selectedItem.quantity === 1) {
      setCart(
        cart.filter((item) => item.id !== selectedItem.id)
      );
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
          ? { ...selectedItem, quantity: selectedItem.quantity - 1 }
          : item
        )
      );
    }
  };  

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const totalCost = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);


  return (
    <div className='bg-yellow-100'>
      <BrowserRouter basename="/react-food-ordering/">
        <Header cart={cart} />
        <Routes>
          <Route path='/' element={<ProductsList addToCart={addToCart} />} />
          <Route path='/cart' element={
            <Cart 
              cart={cart} 
              handleDecrease={handleDecrease} 
              handleIncrease={handleIncrease} 
              removeFromCart={removeFromCart} 
              totalCost={totalCost}
            />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>   
    </div>
  );
}

export default App;
