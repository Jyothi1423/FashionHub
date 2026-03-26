import { useWishlist } from "../Wishlist/WishlistContext";
import { useCart } from "../Cart/CartContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlistItems, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <div className="w-16 h-[1px] bg-gray-200 mb-8"></div>
        <h2 className="text-xl font-light uppercase tracking-[0.3em] mb-8 text-gray-400">Your Wishlist is Empty</h2>
        <Link 
          to="/" 
          className="border border-black px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500"
        >
          Discover Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16 border-b border-gray-100 pb-6">
          <h1 className="text-2xl font-light tracking-[0.2em] text-black uppercase">My Wishlist</h1>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">{wishlistItems.length} Saved Items</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {wishlistItems.map((item) => (
            <div key={item.id} className="group flex flex-col">
              <div className="relative aspect-[4/5] bg-[#f9f9f9] overflow-hidden mb-6">
                {/* Remove from Wishlist Button */}
                <button 
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-4 right-4 z-20 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <Link to={`/product/${item.id}`} className="block w-full h-full">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain p-12 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />
                </Link>
              </div>

              <div className="text-center flex flex-col items-center">
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">{item.category}</p>
                <h4 className="text-sm font-medium text-black mb-2 line-clamp-1">{item.title}</h4>
                <p className="text-base font-semibold text-black mb-6">${item.price.toFixed(2)}</p>
                
                <button 
                  onClick={() => addToCart(item)}
                  className="w-full border border-black py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;