import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);