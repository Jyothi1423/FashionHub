import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  // Helper to handle one-by-one removal logic
  const handleRemoveOne = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(id, -1);
    } else {
      removeFromCart(id);
    }
  };

  // Confirmation before clearing entire cart
  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your entire bag?")) {
      clearCart();
    }
  };

  // Empty Cart State
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <div className="w-16 h-[1px] bg-gray-200 mb-8"></div>
        <h2 className="text-xl font-light uppercase tracking-[0.3em] mb-8 text-gray-400">Your Bag is Empty</h2>
        <Link 
          to="/product" 
          className="border border-black px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-40">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header with Clear All functionality */}
        <div className="flex justify-between items-end mb-16 border-b border-gray-100 pb-6">
          <div>
            <h1 className="text-2xl font-light tracking-tight text-black uppercase tracking-[0.2em]">Shopping Bag</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">{cartItems.length} Items</p>
          </div>
          
          <button 
            onClick={handleClearCart}
            className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-red-500 transition-colors duration-300"
          >
            Clear All
          </button>
        </div>

        {/* Items List */}
        <div className="space-y-12">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center gap-8 border-b border-gray-50 pb-12">
              
              {/* Product Image */}
              <div className="w-32 h-40 bg-[#f9f9f9] p-6 flex-shrink-0 group overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 text-center md:text-left">
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-2 block">
                  {item.category}
                </span>
                <h4 className="text-sm font-medium text-black mb-4 max-w-md mx-auto md:mx-0 leading-snug">
                  {item.title}
                </h4>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-[9px] font-bold uppercase border-b border-black pb-0.5 hover:text-gray-400 hover:border-gray-400 transition-all"
                >
                  Remove Item
                </button>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center border border-gray-100 px-3 py-2 bg-white shadow-sm">
                <button 
                  onClick={() => handleRemoveOne(item.id, item.quantity)} 
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors text-lg font-light"
                >
                  −
                </button>
                <span className="px-6 text-xs font-semibold w-12 text-center">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, 1)} 
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors text-lg font-light"
                >
                  +
                </button>
              </div>

              {/* Price Breakdown */}
              <div className="text-right min-w-[120px]">
                <p className="text-sm text-gray-400 mb-1 font-light">${item.price.toFixed(2)} each</p>
                <p className="text-lg font-semibold tracking-tighter text-black">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout Summary Section */}
        {/* <div className="mt-20 flex flex-col items-end">
          <div className="w-full sm:w-96 bg-[#f9f9f9] p-8">
            <div className="space-y-4 mb-10">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-4">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between pt-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">Total</span>
                <span className="text-2xl font-light tracking-tighter text-black">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
            
            <button className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all active:scale-[0.98] shadow-lg">
              Proceed to Checkout
            </button>
            
            <Link 
              to="/" 
              className="block text-center mt-6 text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>*/}
      </div> 
     </div>
  );
};

export default Cart;