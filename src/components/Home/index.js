import { Link } from "react-router-dom";
// Ensure this path matches your folder structure
import Products from "../Products"; 

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="bg-gray-50 py-20 lg:py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black mb-6">
            THE <span className="text-gray-300">EDIT.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-lg mb-10 font-medium leading-relaxed">
            A curated selection of high-quality essentials designed for the modern lifestyle.
          </p>
          <Link 
            to="/product" 
            className="bg-black text-white px-12 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl"
          >
            Explore All
          </Link>
        </div>
      </section>

      {/* --- FEATURED PRODUCTS (Showing only 4) --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-black">New Arrivals</h2>
              <p className="text-gray-400 mt-1">Our latest drops, handpicked for you.</p>
            </div>
            <Link to="/product" className="text-sm font-bold border-b-2 border-black pb-1 hover:text-gray-400 transition-colors">
              View All &rarr;
            </Link>
          </div>

          {/* We pass a 'limit' prop to show only 4 products */}
          <Products limit={4} />
        </div>
      </section>

      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000" 
              alt="Craftsmanship" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 border-[15px] border-white/20 m-6"></div>
          </div>

          {/* Text Side (The Summary) */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-black">
                Born from a passion for timeless design and modern functionality.
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                Founded in 2026, our store began with a simple belief: that the objects we surround ourselves with should be as beautiful as they are useful. We don't just sell products; we curate experiences.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-500 leading-relaxed">
                Every item in our collection is handpicked for its quality, ethical craftsmanship, and minimalist aesthetic. We believe in "slow consumption"—investing in pieces that last a lifetime rather than following fleeting trends.
              </p>
              <p className="text-gray-500 leading-relaxed italic">
                "Our mission is to bring a touch of quiet luxury to your everyday routine, making the ordinary feel extraordinary."
              </p>
            </div>

            {/* Signature / Call to action */}
            <div className="pt-6">
              <Link 
                to="/product" 
                className="inline-block border-b-2 border-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-gray-400 hover:border-gray-400 transition-all"
              >
                Discover the Collection &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SIMPLE PROMO BANNER --- */}
      <section className="bg-black py-16 px-6 mx-6 rounded-3xl mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-white text-2xl font-bold mb-4">Get 10% off your first order</h2>
          <p className="text-gray-400 mb-8 text-sm">Join our community and stay updated on new collections.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-3 rounded-full bg-gray-900 border border-gray-800 text-white focus:outline-none w-full sm:w-72" 
            />
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all">
              Join Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;