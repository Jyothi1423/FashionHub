import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartContext"; // Ensure this path is correct
import "./index.css";

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // 1. Context and State Hooks
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [addedId, setAddedId] = useState(null);
    const [isWishlisted, setIsWishlisted] = useState(false);

    // 2. Fetch Product Data
    useEffect(() => {
        const getSingleProduct = async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.error("Error fetching product:", err);
            } finally {
                setLoading(false);
            }
        };
        getSingleProduct();
    }, [id]);

    // 3. Action Handlers
    const handleAddToCart = (item) => {
        if (item) {
            addToCart(item);
            setAddedId(item.id);
            // Reset "Added!" feedback after 2 seconds
            setTimeout(() => setAddedId(null), 2000);
        }
    };

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    if (loading) return <div className="flex justify-center items-center h-screen uppercase tracking-widest text-xs">Loading...</div>;
    if (!product) return <div className="flex justify-center items-center h-screen uppercase tracking-widest text-xs text-red-500">Product not found!</div>;

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
            {/* Navigation Header */}
            <button 
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] mb-12 hover:opacity-50 transition-opacity"
                onClick={() => navigate("/products")}
            >
                ← Back to Collection
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Image Section */}
                <div className="bg-[#f9f9f9] p-8 md:p-16 aspect-[4/5] flex items-center justify-center overflow-hidden">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 hover:scale-105" 
                    />
                </div>
                
                {/* Details Section */}
                <div className="flex flex-col pt-4">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mb-4">
                        {product.category}
                    </span>
                    
                    <h1 className="text-3xl md:text-4xl font-light tracking-tight text-black mb-6 leading-tight">
                        {product.title}
                    </h1>
                    
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center bg-black text-white px-2 py-1 text-[10px] font-bold">
                            <span className="mr-1">★</span> {product.rating?.rate} 
                        </div>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                            Based on {product.rating?.count} reviews
                        </span>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-600 mb-10 font-light max-w-xl">
                        {product.description}
                    </p>
                    
                    {/* Price and Actions Footer */}
                    <div className="pt-8 border-t border-gray-100">
                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="text-2xl font-semibold text-black">${product.price.toFixed(2)}</span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-tighter italic">Tax included</span>
                        </div>
                        
                        <div className="flex items-center gap-4 w-full">
                            {/* Main Add To Cart Button */}
                            <button 
                                onClick={() => handleAddToCart(product)}
                                disabled={addedId === product.id}
                                className={`flex-1 border py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-in-out active:scale-95 
                                    ${addedId === product.id 
                                        ? "border-green-500 text-green-500 bg-white cursor-default" 
                                        : "border-black text-black bg-transparent hover:bg-black hover:text-white"
                                    }`}
                            >
                                {addedId === product.id ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Added to Bag
                                    </span>
                                ) : "Add To Cart"}
                            </button>

                            {/* Circular Wishlist Button */}
                            <button 
                                onClick={toggleWishlist}
                                className={`p-4 border transition-all duration-300 rounded-full flex items-center justify-center active:scale-90 ${
                                    isWishlisted 
                                    ? "bg-red-50 border-red-500 text-red-500 shadow-sm" 
                                    : "border-gray-200 text-black hover:border-black"
                                }`}
                                title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-5 w-5" 
                                    fill={isWishlisted ? "currentColor" : "none"} 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={1.2} 
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;