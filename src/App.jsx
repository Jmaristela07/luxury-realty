import React, { useState } from 'react';
import House from './assets/house2.jpg';
import Logo from './assets/logo.jpg';
import Marci from './assets/MARCI METZGER.jpg';
import Logo1 from './assets/logo1.jpg';
import Logo2 from './assets/logo2.jpg';
import Logo3 from './assets/logo3.jpg';
import Logo4 from './assets/logo4.jpg';
import Facebook from './assets/facebook..svg';
import Instagram from './assets/instagram.svg';
import Linkedin from './assets/linkedin.svg';
import Yelp from './assets/yelp.svg';
import Picture1 from './assets/photo1.jpg';
import Picture2 from './assets/photo2.jpg';
import Picture3 from './assets/photo3.jpg';
import Picture4 from './assets/photo4.jpg';
import Picture5 from './assets/photo5.jpg';
import Picture6 from './assets/photo6.jpg';
import Picture7 from './assets/photo7.jpg';
import Handshake from './assets/Handshake.jpg';
import Livingroom from './assets/livingRoom.jpg';
import House2 from './assets/modernHouse2.jpg';
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [searchParams, setSearchParams] = useState({
    location: 'Any',
    type: 'Any',
    sortBy: 'Newest',
    bedrooms: 'Any Number',
    baths: 'Any Number',
    minPrice: '',
    maxPrice: '',
  });

  const images = [
    { src: Picture1, title: 'Featured Property', desc: 'Luxury Residence' },
    { src: Picture2, title: 'Interior Living Space', desc: 'Modern Architectural Design' },
    { src: Picture3, title: 'Gourmet Kitchen', desc: 'Premium Finishes' },
    { src: Picture4, title: 'Master Suite', desc: 'Spacious & Elegant' },
    { src: Picture5, title: 'Outdoor Living', desc: 'Private Oasis' },
    { src: Picture6, title: 'Scenic Views', desc: 'Pahrump Valley Landscape' },
    { src: Picture7, title: 'Estate Grounds', desc: 'Prime Nevada Real Estate' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 font-sans antialiased selection:bg-[#8C6D53] selection:text-white">
      
      {/* 1. HERO & INLINE NAVBAR CONTAINER */}
      <section id="home" className="w-full bg-[#FAF8F5] px-6 lg:px-16 pt-6 pb-12 relative overflow-hidden">
        
        {/* FULL-WIDTH FIXED NAVBAR */}
        <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-[#FFFFFF] backdrop-blur-md border-b border-stone-200/60 py-4 px-6 lg:px-16 transition-all duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Left Nav Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-8 text-xs font-medium uppercase tracking-wider text-stone-600">
              <a href="#about" className="hover:text-[#8C6D53] transition-colors">HOME</a>
              <a href="#listings" className="hover:text-[#8C6D53] transition-colors">LISTINGS</a>
              <a href="#pillars" className="hover:text-[#8C6D53] transition-colors">LET'S MOVE</a>
              <a href="#services" className="hover:text-[#8C6D53] transition-colors">ABOUT US</a>
            </div>

            {/* Center Brand Logo */}
            <div className="text-center">
              <a href="#home" className="block">
                <img src={Logo} alt="Marci Metzger Logo" className="h-10 sm:h-12 w-auto object-contain mx-auto translate-x-5 sm:translate-x-10" />
              </a>
            </div>

            {/* Social Icons (Desktop) */}
            <div className="hidden lg:flex items-center space-x-6 text-xs font-medium text-stone-600 translate-x-5 sm:translate-x-25">
              <img src={Facebook} alt="Facebook" className="h-5 w-auto" />
              <img src={Instagram} alt="Instagram" className="h-5 w-auto" />
              <img src={Linkedin} alt="LinkedIn" className="h-5 w-auto" />
              <img src={Yelp} alt="Yelp" className="h-5 w-auto" />
            </div>

            {/* Right Action / Hamburger */}
            <div className="flex items-center space-x-4">
              <a href="tel:2069196886" className="bg-[#8C6D53] hover:bg-[#735842] text-white px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-widest transition-all shadow-sm">
                Call Now
              </a>
              
              {/* Mobile Hamburger Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-stone-800 p-2 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>

          {/* MOBILE DROPDOWN MENU WITH SOCIAL ICONS */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 text-center text-xs uppercase tracking-widest font-semibold text-stone-800 shadow-xl">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-stone-100">Home</a>
              <a href="#listings" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-stone-100">Listings</a>
              <a href="#pillars" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-stone-100">Let's Move</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-stone-100">About Us</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-stone-100">Gallery</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-stone-100">Contact</a>

              {/* Social Icons Inside Mobile Menu */}
              <div className="flex items-center justify-center space-x-6 pt-2">
                <img src={Facebook} alt="Facebook" className="h-5 w-auto" />
                <img src={Instagram} alt="Instagram" className="h-5 w-auto" />
                <img src={Linkedin} alt="LinkedIn" className="h-5 w-auto" />
                <img src={Yelp} alt="Yelp" className="h-5 w-auto" />
              </div>
            </div>
          )}
        </nav>

        {/* HERO FOREGROUND CONTENT */}
        <div className="absolute inset-0 z-0">
          <img
            src={House}
            alt="Luxury Real Estate Interior"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-900/65 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-12 space-y-6 text-white text-left">
              
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight text-white">
                  PAHRUMP REALTOR
                </h1>
                <p className="text-lg sm:text-2xl font-inter text-[#C5A880] italic">
                  MARCI METZGER - THE RIDGE REALTY GROUP
                </p>
              </div>

              <p className="text-stone-200 text-sm sm:text-base max-w-xl leading-relaxed font-inter">
                Don't just list it... <strong className="text-white font-semibold">Get it SOLD!</strong> We exhaust every avenue to reach every possible buyer for top dollar.
              </p>

              {/* SEARCH LISTINGS CARD */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/80 mt-8 w-full max-w-4xl text-stone-800">
                
                <h2 className="text-xl sm:text-2xl font-inter font-normal tracking-wide text-stone-600 uppercase mb-6">
                  Search Listings
                </h2>

                <div className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    
                    <div>
                      <label className="block text-xs font-inter text-stone-600 mb-1">Location</label>
                      <select 
                        value={searchParams.location}
                        onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-inter text-stone-800 focus:outline-none focus:border-[#8C6D53]"
                      >
                        <option value="Any">Any</option>
                        <option value="Pahrump">Pahrump</option>
                        <option value="Las Vegas">Las Vegas</option>
                        <option value="Henderson">Henderson</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-inter text-stone-600 mb-1">Type</label>
                      <select 
                        value={searchParams.type}
                        onChange={(e) => setSearchParams({...searchParams, type: e.target.value})}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-inter text-stone-800 focus:outline-none focus:border-[#8C6D53]"
                      >
                        <option value="Any">Any</option>
                        <option value="Land">Land</option>
                        <option value="Residential">Residential</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-inter text-stone-600 mb-1">Sort By</label>
                      <select 
                        value={searchParams.sortBy}
                        onChange={(e) => setSearchParams({...searchParams, sortBy: e.target.value})}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-inter text-stone-800 focus:outline-none focus:border-[#8C6D53]"
                      >
                        <option value="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                      </select>
                    </div>

                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-end pt-2">
                    
                    <div>
                      <label className="block text-xs font-inter text-stone-600 mb-1">Bedrooms</label>
                      <select 
                        value={searchParams.bedrooms}
                        onChange={(e) => setSearchParams({...searchParams, bedrooms: e.target.value})}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-inter text-stone-800 focus:outline-none focus:border-[#8C6D53]"
                      >
                        <option value="Any Number">Any Number</option>
                        <option value="1+">1+</option>
                        <option value="2+">2+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-inter text-stone-600 mb-1">Baths</label>
                      <select 
                        value={searchParams.baths}
                        onChange={(e) => setSearchParams({...searchParams, baths: e.target.value})}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-inter text-stone-800 focus:outline-none focus:border-[#8C6D53]"
                      >
                        <option value="Any Number">Any Number</option>
                        <option value="1+">1+</option>
                        <option value="2+">2+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-inter text-stone-600 mb-1">Min Price</label>
                      <input 
                        type="text"
                        placeholder="$ Min"
                        value={searchParams.minPrice}
                        onChange={(e) => setSearchParams({...searchParams, minPrice: e.target.value})}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-inter text-stone-800 focus:outline-none focus:border-[#8C6D53]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-inter text-stone-600 mb-1">Max Price</label>
                      <input 
                        type="text"
                        placeholder="$ Max"
                        value={searchParams.maxPrice}
                        onChange={(e) => setSearchParams({...searchParams, maxPrice: e.target.value})}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-inter text-stone-800 focus:outline-none focus:border-[#8C6D53]"
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <button className="w-full bg-stone-300 hover:bg-[#8C6D53] hover:text-white text-stone-800 font-bold py-2.5 rounded-full text-xs uppercase tracking-widest transition-all shadow-sm">
                        Search Now
                      </button>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-16 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            <img src={Marci} alt="Marci Metzger" className="w-full max-w-sm h-auto object-cover rounded-2xl mx-auto shadow-md" />
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                Marci Metzger
              </h2>
              <p className="text-sm uppercase tracking-widest font-inter text-[#8C6D53]">
                REALTOR FOR NEARLY 3 DECADES
              </p>
            </div>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-inter">
              With nearly 30 years of hands-on real estate expertise in Nevada, Marci Metzger specializes in connecting buyers with their dream homes and helping sellers maximize their property's true market value.
            </p>

            <div className="pt-2 border-t border-stone-100">
              <span className="block text-[10px] font-bold uppercase text-stone-400">Direct Phone</span>
              <a href="tel:2069196886" className="font-inter text-stone-800 hover:text-[#8C6D53] transition-colors text-sm font-semibold">
                (206) 919-6886
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. TRUST & ACHIEVEMENTS STATS BAR */}
      <section className="bg-white border-y border-[#8C6D53]/30 py-8 px-6 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
        <img src={Logo1} alt="Logo 1" className="h-24 w-auto object-contain" />
        <img src={Logo2} alt="Logo 2" className="h-24 w-auto object-contain" />
        <img src={Logo3} alt="Logo 3" className="h-24 w-auto object-contain" />
        <img src={Logo4} alt="Logo 4" className="h-24 w-auto object-contain" />
      </section>

      {/* 4. GET IT SOLD / CORE PILLARS SECTION */}
      <section id="pillars" className="py-24 bg-white px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-24">
          
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-widest text-stone-400 uppercase">
              GET IT SOLD
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 h-[320px] sm:h-[400px] overflow-hidden rounded-xl shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Top Residential Sales"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 text-center lg:text-left space-y-4 max-w-lg mx-auto lg:mx-0">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-stone-900">
                Top Residential Sales Last 5 Years
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-inter">
                We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-center lg:text-left space-y-4 max-w-lg mx-auto lg:mx-0 order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-stone-900">
                Don't Just List it...
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-inter">
                Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.
              </p>
            </div>
            <div className="lg:col-span-6 h-[320px] sm:h-[400px] overflow-hidden rounded-xl shadow-sm order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury House with Pool"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 h-[320px] sm:h-[400px] overflow-hidden rounded-xl shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80"
                alt="Guide to Buyers - Keys"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 text-center lg:text-left space-y-4 max-w-lg mx-auto lg:mx-0">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-stone-900">
                Guide to Buyers
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-inter">
                Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PHOTO GALLERY CAROUSEL SECTION */}
      <section id="gallery" className="py-24 bg-stone-900 text-white px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-widest text-white uppercase">
              PHOTO GALLERY
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-2" />
          </div>

          <div className="relative w-full max-w-5xl mx-auto h-[350px] sm:h-[480px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-stone-800 group">
            
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover transition-all duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 flex justify-between items-end">
              <div className="space-y-1">
                <span className="bg-[#8C6D53] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {currentIndex + 1} / {images.length}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white pt-2">
                  {images[currentIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-inter">
                  {images[currentIndex].desc}
                </p>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-stone-900/60 hover:bg-[#8C6D53] text-white p-3 sm:p-4 rounded-full backdrop-blur-md border border-white/20 transition-all opacity-80 group-hover:opacity-100 shadow-lg"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-stone-900/60 hover:bg-[#8C6D53] text-white p-3 sm:p-4 rounded-full backdrop-blur-md border border-white/20 transition-all opacity-80 group-hover:opacity-100 shadow-lg"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-16 w-20 sm:h-20 sm:w-28 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                  currentIndex === idx
                    ? 'border-[#C5A880] scale-105 shadow-md opacity-100'
                    : 'border-transparent opacity-40 hover:opacity-80'
                }`}
              >
                <img src={img.src} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 6. OUR SERVICES SECTION */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest text-stone-400 uppercase">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start">
          
          <div className="space-y-6 text-center">
            <div className="h-64 sm:h-72 overflow-hidden rounded-2xl shadow-sm">
              <img 
                src={Livingroom} 
                alt="Real Estate Done Right" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-900">
                Real Estate Done Right
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-inter">
                Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!
              </p>
            </div>
          </div>

          <div className="space-y-6 text-center">
            <div className="h-64 sm:h-72 overflow-hidden rounded-2xl shadow-sm">
              <img 
                src={House2} 
                alt="Commercial & Residential" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-900">
                Commercial & Residential
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-inter">
                Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-center">
            <div className="h-64 sm:h-72 flex justify-center items-center">
              <div className="h-64 sm:h-72 w-full overflow-hidden rounded-2xl shadow-sm">
                <img 
                  src={Handshake} 
                  alt="Rely on Expertise" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-900">
                Rely on Expertise
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-inter">
                If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. CALL OR VISIT (CONTACT & OFFICE INFO SECTION) */}
      <section id="contact" className="py-24 bg-white px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center">
            <h2 className="text-xl sm:text-4xl lg:text-3xl font-serif tracking-widest text-stone-400 uppercase">
              CALL OR VISIT
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl font-serif font-normal text-stone-900">
                Send Message
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-transparent border-b border-stone-300 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-800 placeholder:text-stone-400"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email*" 
                    className="w-full bg-transparent border-b border-stone-300 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-800 placeholder:text-stone-400"
                  />
                </div>
                <div>
                  <textarea 
                    rows="4" 
                    placeholder="Message" 
                    className="w-full bg-transparent border-b border-stone-300 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-800 placeholder:text-stone-400 resize-none"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button className="bg-stone-200 hover:bg-stone-900 hover:text-white text-stone-900 font-bold px-10 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all">
                    SEND
                  </button>
                </div>
              </form>

              <p className="text-[10px] text-stone-400 pt-2">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-10 text-stone-800 lg:pl-6">
              
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-stone-900">
                  Marci Metzger - THE RIDGE REALTY GROUP
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                </p>
                <p className="text-sm text-stone-800 font-medium">
                  (206) 919-6886
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-stone-900">
                  Office Hours
                </h3>
                
                <div className="space-y-2 text-sm text-stone-700">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-stone-900">Open today</span>
                    <span className="text-stone-600">08:00 am – 07:00 pm</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-stone-700">Open daily</span>
                    <span className="text-stone-600">8:00 am - 7:00 pm</span>
                  </div>
                </div>

                <p className="text-xs text-stone-500 pt-2">
                  Appointments outside office hours available upon request. Just call!
                </p>
              </div>

            </div>

          </div>

          <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-sm border border-stone-200">
            <iframe
              title="Office Location Map"
              src="https://maps.google.com/maps?q=3190%20NV-160%20Suite%20F,%20Pahrump,%20NV%2089048&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-stone-950 text-stone-400 py-8 px-6 text-center text-xs space-y-2 border-t border-stone-900">
        <p> Copyright © 2026 Marci METZGER - All Rights Reserved</p>
      </footer>

    </div>
  );
}