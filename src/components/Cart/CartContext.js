import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 1. ADD TO CART
  const addToCart = (product) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === product.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // 2. REMOVE ENTIRE ITEM
  const removeFromCart = (id) => setCartItems((prev) => prev.filter((item) => item.id !== id));

  // 3. UPDATE QUANTITY (Needed for the + and - buttons in Cart.jsx)
  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + amount) } 
          : item
      )
    );
  };

  // 4. CLEAR ENTIRE CART (This fixes your "not a function" error)
  const clearCart = () => {
    setCartItems([]);
  };

  // 5. CALCULATE TOTAL PRICE
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity, // Added to provider
        clearCart,      // Added to provider
        totalPrice 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);