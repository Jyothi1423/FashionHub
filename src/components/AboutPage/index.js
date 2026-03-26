import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-gray-400 mb-4">
            Our Essence
          </h2>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-black mb-8">
            Simplicity in <span className="italic">Every</span> Detail.
          </h1>
          <div className="w-16 h-[1px] bg-black mx-auto"></div>
        </div>
      </section>

      {/* --- SUMMARY SECTION --- */}
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

      {/* --- VALUES GRID --- */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-black">Quality</h4>
            <p className="text-sm text-gray-400">Premium materials sourced from ethical partners globally.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-black">Sustainability</h4>
            <p className="text-sm text-gray-400">Minimal packaging and a commitment to a carbon-neutral future.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-black">Community</h4>
            <p className="text-sm text-gray-400">Supporting independent designers and local artisans.</p>
          </div>
        </div>
      </section>
      {/* --- BRAND STORY PREVIEW --- */}
        <section className="py-24 bg-white border-t border-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Left Side: Large Minimalist Image */}
              <div className="w-full lg:w-1/2 group relative">
                <div className="overflow-hidden bg-gray-100 rounded-sm aspect-[4/5]">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2CyWJ9Z923CZg2jHUA4VHYiOpomCQZ5hBA&s" 
                    alt="Brand Philosophy" 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                {/* Floating Label */}
                <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 hidden md:block shadow-2xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em]">Est. 2026</p>
                </div>
              </div>
        
              {/* Right Side: Summary Text */}
              <div className="w-full lg:w-1/2 space-y-8">
                <header>
                  <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-gray-400 mb-4">
                    Our Story
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-light leading-tight text-black tracking-tighter">
                    Crafting a <br /> 
                    <span className="italic">New Standard</span> <br /> 
                    of Living.
                  </h3>
                </header>
        
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 font-light leading-relaxed">
                    We believe that your home and wardrobe should be a sanctuary of quality. 
                    Every piece we curate is a testament to the belief that simplicity is the 
                    ultimate sophistication.
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                    Founded on the principles of ethical craftsmanship and timeless design, 
                    we move away from fast trends to focus on what truly lasts. 
                    Discover the passion behind our curation.
                  </p>
                </div>
        
                {/* Link to About Page */}
                <div className="pt-4">
                  <Link 
                    to="/aboutpage" 
                    className="group inline-flex items-center gap-6"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-black group-hover:text-gray-500 transition-colors">
                      The Full Story
                    </span>
                    <div className="h-[1px] w-12 bg-black transition-all duration-500 group-hover:w-24 group-hover:bg-gray-400"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default About;