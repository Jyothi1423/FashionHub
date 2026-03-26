import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Cart/CartContext";

const Products = ({ limit = 20 }) => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedId, setAddedId] = useState(null);
  
  // State to track wishlisted items by ID
  const [wishlist, setWishlist] = useState({});

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedId(item.id);
    setTimeout(() => {
      setAddedId(null);
    }, 2000);
  };

  // Toggle wishlist state for a specific ID
  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-60">
        <div className="w-10 h-10 border-2 border-gray-100 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-12 text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-gray-400 mb-3">
          Curated Collection
        </h2>
        <h1 className="text-4xl font-light tracking-tight text-black sm:text-5xl">
          Featured Products
        </h1>
        <div className="mt-6 w-12 h-[1px] bg-black mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.slice(0, limit).map((item) => (
            <div key={item.id} className="group flex flex-col">
              
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-[#f9f9f9] overflow-hidden mb-6">
                
                {/* --- WISHLIST HEART SYMBOL --- */}
                <button 
                  onClick={() => toggleWishlist(item.id)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:scale-110 active:scale-90"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 transition-colors duration-300 ${wishlist[item.id] ? 'fill-red-500 stroke-red-500' : 'fill-transparent stroke-black'}`} 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>

                <Link to={`/product/${item.id}`} className="block w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-12 mix-blend-multiply transition-transform duration-1000 group-hover:scale-110"
                  />
                </Link>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]">
                   <p className="text-white text-[10px] text-center line-clamp-4 leading-relaxed font-light mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     {item.description}
                   </p>
                   <Link 
                    to={`/product/${item.id}`}
                    className="bg-white text-black px-4 py-2 text-[9px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors translate-y-4 group-hover:translate-y-0 transition-transform duration-700"
                   >
                     Quick View
                   </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col text-center items-center px-2">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-2">
                  {item.category}
                </p>
                <h4 className="text-sm font-medium text-gray-900 line-clamp-1 mb-2 tracking-tight transition-colors group-hover:text-gray-500">
                  {item.title}
                </h4>
                <span className="text-base font-semibold text-black mb-5">
                  ${item.price.toFixed(2)}
                </span>

                <button 
                  onClick={() => handleAddToCart(item)}
                  disabled={addedId === item.id}
                  className={`w-full max-w-[180px] border py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-in-out active:scale-95
                    ${addedId === item.id 
                      ? "border-green-500 text-green-500 bg-white cursor-default" 
                      : "border-black text-black bg-transparent hover:bg-black hover:text-white"
                    }`}
                >
                  {addedId === item.id ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      Added!
                    </span>
                  ) : (
                    "Add To Cart"
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;