import React, { useState, useEffect } from 'react';
import { 
  Scissors, 
  MapPin, 
  Phone, 
  Calendar, 
  Clock, 
  Instagram, 
  Facebook, 
  User, 
  ChevronRight, 
  Star,
  Menu,
  X,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Award,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Types ---

const SALON_NAME = "GK Salon";
const TAGLINE = "Style That Defines You";
const OWNER = "Krishna Charan Das";
const ESTD = "2025";
const PHONE = "8822383544";
const WHATSAPP = "8822383544";
const EMAIL = "Krishnacharandas1995@gmail.com";
const ADDRESS = "Hatilung near Asian Public Higher Secondary School, NGFW Gym";

const SERVICES = [
  { id: 1, name: "Hair Cutting", price: "100", icon: Scissors, desc: "Precision cuts tailored to your face shape and personal style." },
  { id: 2, name: "Beard Set", price: "30", icon: User, desc: "Grooming and shaping for a sharp, professional look." },
  { id: 3, name: "Children Hair Cutting", price: "50", icon: Sparkles, desc: "Gentle and stylish cuts for our younger clients." },
  { id: 4, name: "Facial", price: "300", icon: Sparkles, desc: "Rejuvenating skin treatments for a healthy, glowing complexion." },
  { id: 5, name: "Hair Colour", price: "300", icon: CheckCircle2, desc: "Premium hair coloring for a vibrant and long-lasting look." },
  { id: 6, name: "Curly Styling", price: "400", icon: Sparkles, desc: "Professional curly hair management and enhancements." },
  { id: 7, name: "Threading", price: "30", icon: CheckCircle2, desc: "Precise eyebrow and facial hair shaping." },
];

const WORKING_HOURS = [
  { day: "Monday", time: "10:00 AM – 5:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 5:00 PM" },
  { day: "Friday", time: "10:00 AM – 5:00 PM" },
  { day: "Sunday", time: "10:00 AM – 5:00 PM" },
];

const OFFERS = [
  { id: 1, title: "First Visit Special", discount: "20% OFF", desc: "Get 20% off on your first salon visit. Premium experience awaits." },
  { id: 2, title: "Groom's Package", discount: "Special Rates", desc: "Complete wedding grooming packages for the modern man." },
];

const STAFF = [
  { name: "Krishna Charan Das", role: "Master Stylist & Owner", exp: "10+ Years", image: "https://res.cloudinary.com/duy2rot8s/image/upload/v1776436994/kisna_charan_das_wbubv9.webp" },
  { name: "Suman Kumar", role: "Skin Specialist", exp: "6 Years", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
];

const TESTIMONIALS = [
  { name: "Rahul S.", review: "The best hair cutting experience in Hatilung. Professional and very hygienic.", rating: 5 },
  { name: "Priya M.", review: "Loved the facial! The staff is very polite and the ambiance is very premium.", rating: 5 },
  { name: "Amit B.", review: "Excellent beard grooming. Krishna really knows his craft. Highly recommended!", rating: 5 },
];

const GALLERY = [
  "https://www.pexels.com/download/video/3997187/",
  "https://res.cloudinary.com/duy2rot8s/image/upload/v1776573172/gk_salon_img4_tzfip4.jpg",
  "https://res.cloudinary.com/duy2rot8s/image/upload/v1776573166/gk_salon_img2_eakyxr.jpg",
  "https://res.cloudinary.com/duy2rot8s/video/upload/v1776573087/gk_salon_vid_1_dtzyrg.mp4",
  "https://res.cloudinary.com/duy2rot8s/image/upload/v1776573034/gk_salon_img5_gbsj4h.jpg",
  "https://res.cloudinary.com/duy2rot8s/image/upload/v1776573033/gk_salon_img_7_merjbq.jpg",
  "https://res.cloudinary.com/duy2rot8s/image/upload/v1776573029/gk_salon_img_6_duvx6y.jpg",
];

// --- Components ---

const OfferBanner = () => (
  <div className="h-10 bg-gold-light text-black text-[10px] font-bold uppercase tracking-[0.4em] flex items-center justify-center fixed top-0 w-full z-[60] shadow-2xl relative overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent bg-[length:200%_100%] animate-shimmer pointer-events-none" />
    <Sparkles size={12} className="mr-3 animate-pulse text-black" />
    Exclusive Opening Offer: 20% Off All Services This Friday
    <Sparkles size={12} className="ml-3 animate-pulse text-black" />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Booking", href: "#booking" },
  ];

  return (
    <nav className={`fixed top-10 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img 
            src="https://res.cloudinary.com/duy2rot8s/image/upload/v1776436251/gk_saloon_vxjyhk.png" 
            alt={SALON_NAME} 
            className="h-12 w-auto object-contain brightness-110" 
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-[0.2em] hover:text-gold-light transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a href="#booking" className="px-6 py-2.5 gold-gradient text-black text-xs font-bold uppercase tracking-widest rounded-none transform hover:scale-105 transition-transform">
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-luxury-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-nav p-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="#booking" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 gold-gradient text-black text-center text-xs font-bold uppercase tracking-widest">
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Fallback Background Image (Static) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000')` }}
      />

      {/* Cinematic Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-85 z-0"
      >
        <source src="https://res.cloudinary.com/duy2rot8s/video/upload/f_auto,q_auto,w_1920/v1776507712/9737998-uhd_3840_2160_24fps_kta2zb.mp4" type="video/mp4" />
      </video>

      {/* Overlays for Contrast & Depth - Lightened for more brightness */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/70 z-1" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl pt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
          <span className="text-[11px] uppercase tracking-[0.6em] text-gold-light mb-8 block font-bold drop-shadow-sm">
            ESTABLISHED {ESTD}
          </span>
          <h1 className="text-7xl md:text-[10rem] font-serif italic font-light mb-12 tracking-tighter leading-none text-white animate-pulse-glow">
            Prestige <span className="text-gold-light">Grooming.</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16">
            <a href="#booking" className="px-12 py-5 gold-gradient text-black font-bold uppercase text-[11px] tracking-[0.4em] transition-all hover:scale-105 shadow-[0_0_30px_rgba(197,160,89,0.3)]">
              Reserve Now
            </a>
            <a href="#services" className="text-[11px] uppercase tracking-[0.5em] font-bold text-white/70 hover:text-gold-light transition-all border-b border-white/30 pb-2 flex items-center group">
              Explore Services <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 right-12 text-[11px] tracking-[0.5em] font-bold text-gold-light/40 uppercase hidden lg:block border-r border-gold-light/20 pr-4">
        Excellence in Craft
      </div>
    </section>
  );
};

const SectionHeading = ({ subtitle, title }: { subtitle: string, title: string }) => (
  <div className="text-center mb-16 px-6">
    <span className="text-gold-light uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block">{subtitle}</span>
    <h2 className="text-4xl md:text-6xl font-serif italic text-white font-light">
      {title}
    </h2>
    <div className="w-12 h-[1px] bg-gold-light/40 mx-auto mt-6" />
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="What We Offer" title="Premium Services" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="luxury-card p-6 flex justify-between items-center group"
            >
              <div className="service-info">
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-1 group-hover:text-gold-light transition-colors">{service.name}</h4>
                <p className="text-[10px] text-muted tracking-widest uppercase">{service.desc}</p>
              </div>
              <div className="price text-xl font-serif font-bold text-gold-light ml-4">
                ₹{service.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Offers = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {OFFERS.map((offer, index) => (
            <div key={offer.id} className="flex-1 gold-gradient p-[1px] shadow-2xl group overflow-hidden relative">
              <div className="bg-luxury-black p-10 h-full flex flex-col justify-center border border-white/5 relative overflow-hidden">
                {/* Background Images for Offers */}
                {index === 0 && (
                  <>
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 grayscale-0"
                      style={{ backgroundImage: `url('https://images.pexels.com/photos/9992819/pexels-photo-9992819.jpeg')` }}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </>
                )}
                {index === 1 && (
                  <>
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 grayscale-0"
                      style={{ backgroundImage: `url('https://images.pexels.com/photos/4625616/pexels-photo-4625616.jpeg')` }}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </>
                )}
                
                <div className="relative z-10">
                  <span className="text-gold-light font-bold text-sm tracking-[0.2em] uppercase mb-2 block">{offer.discount}</span>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-white">{offer.title}</h3>
                  <p className="text-luxury-white/90 mb-8 font-light italic">"{offer.desc}"</p>
                  <a href="#booking" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gold-light hover:underline underline-offset-4 decoration-2">
                    Claim Offer <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
       {/* Section Background with Overlay */}
       <div 
         className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40 scale-105"
         style={{ backgroundImage: `url('https://images.pexels.com/photos/9992819/pexels-photo-9992819.jpeg')` }}
       />
       <div className="absolute inset-0 bg-luxury-black/70" />

       <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-gold-light z-0" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-gold-light z-0" />
            <img 
              src="https://res.cloudinary.com/duy2rot8s/image/upload/v1776573159/gk_salon_img1_f6imht.jpg" 
              alt="Salon Interior" 
              className="relative z-10 w-full rounded-none hover:scale-[1.02] transition-all duration-700 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1">
            <span className="text-gold-light uppercase tracking-[0.3em] text-xs font-bold mb-3 block">Expertise & Heritage</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Crafting Excellence Since {ESTD}</h2>
            <div className="space-y-6 text-luxury-white/70 font-light leading-relaxed text-lg">
              <p>
                GK Salon is not just a place for a haircut; it's a sanctuary of grooming excellence. Established in {ESTD} by <span className="text-gold-light font-medium italic">{OWNER}</span>, our salon has redefined premium styling in Hatilung.
              </p>
              <p>
                We believe that every individual deserves a style that identifies their unique character. Our commitment to high standards of hygiene, modern styling techniques, and customer satisfaction has made us a landmark for those who value quality above all.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 border border-gold-light/30 flex items-center justify-center text-gold-light">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white">Certified</h4>
                    <p className="text-xs">Master Stylists</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 border border-gold-light/30 flex items-center justify-center text-gold-light">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white">Premium</h4>
                    <p className="text-xs">Modern Equipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
    </section>
  );
};

const Staff = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Behind the Chair" title="Master Artisans" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {STAFF.map((member) => (
            <div key={member.name} className="flex flex-col md:flex-row gap-6 items-center bg-luxury-black p-6 border border-white/5 hover:border-gold-light/30 transition-all duration-500">
              <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-none hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gold-light">{member.name}</h3>
                <p className="text-sm text-luxury-white/60 mb-2 italic">{member.role}</p>
                <div className="flex items-center justify-center md:justify-start space-x-2 text-gold-light/80">
                  <Award size={14} />
                  <span className="text-xs font-bold uppercase tracking-tighter">{member.exp} Experience</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Captured Elegance" title="Salon Gallery" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 lg:gap-6">
          {GALLERY.map((item, i) => {
            const isVideo = item.includes('video') || item.includes('.mp4');
            return (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square overflow-hidden cursor-pointer group"
              >
                {isVideo ? (
                  <video 
                    src={item} 
                    className="w-full h-full object-cover transition-all duration-700" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  />
                ) : (
                  <img src={item} alt="Gallery" className="w-full h-full object-cover transition-all duration-700" referrerPolicy="no-referrer" />
                )}
                <div className="absolute inset-0 bg-gold-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {isVideo ? <Play className="text-white" size={32} fill="currentColor" /> : <Scissors className="text-white" size={32} />}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', date: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', phone: '', service: '', date: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-luxury-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-dark/5 blur-[120px] -z-1" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <div>
          <SectionHeading subtitle="Reserve Your Moment" title="Make An Appointment" />
          <div className="space-y-8 mt-[-3rem]">
            <p className="text-luxury-white/70 font-light italic leading-relaxed">
              Experience the pinnacle of grooming. Choose your preferred time and service, or contact us directly via WhatsApp for a faster response.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-6 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all">
                <MessageCircle size={24} />
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-widest font-bold">WhatsApp</span>
                  <p className="text-sm font-medium">Quick Booking</p>
                </div>
              </a>
              <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-3 p-6 bg-gold-light/10 border border-gold-light/30 text-gold-light hover:bg-gold-light/20 transition-all">
                <Phone size={24} />
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-widest font-bold">Call Now</span>
                  <p className="text-sm font-medium">{PHONE}</p>
                </div>
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 p-8">
              <h4 className="text-xs uppercase tracking-widest font-bold text-gold-light mb-6 flex items-center">
                <Clock size={16} className="mr-2" /> Working Hours
              </h4>
              <div className="space-y-3">
                {WORKING_HOURS.map((h) => (
                  <div key={h.day} className="flex justify-between items-center pb-2 border-b border-white/5 last:border-0 uppercase text-[10px] tracking-[0.2em]">
                    <span>{h.day}</span>
                    <span className="text-gold-light font-bold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111] p-10 mt-12 border border-white/5 rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-[#1a1a1a] border border-white/10 p-4 focus:border-gold-light outline-none transition-all text-sm font-light text-white"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  className="w-full bg-[#1a1a1a] border border-white/10 p-4 focus:border-gold-light outline-none transition-all text-sm font-light text-white"
                  placeholder="8822383544"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block">Select Service</label>
              <select 
                required
                className="w-full bg-[#1a1a1a] border border-white/10 p-4 focus:border-gold-light outline-none transition-all text-sm font-light appearance-none text-white"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option value="" disabled className="bg-luxury-black text-muted">Select Service</option>
                {SERVICES.map(s => <option key={s.id} value={s.name} className="bg-luxury-black">{s.name} - ₹{s.price}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block">Preferred Date</label>
              <input 
                required
                type="date" 
                className="w-full bg-[#1a1a1a] border border-white/10 p-4 focus:border-gold-light outline-none transition-all text-sm font-light text-white"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>

            <button 
              disabled={isSubmitting}
              className="w-full py-5 bg-gold-light text-black font-bold uppercase text-[10px] tracking-[0.3em] transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Confirming...' : 'Confirm Request'}
            </button>

            {success && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-gold-light/20 border border-gold-light text-gold-light text-center text-sm">
                Booking request sent successfully! We will contact you shortly.
              </motion.div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

const ContactMap = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SectionHeading subtitle="Find Us" title="Our Location" />
          <div className="space-y-6 mt-[-3rem]">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gold-light/10 text-gold-light border border-gold-light/20">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest">Address</h4>
                <p className="text-luxury-white/60 font-light mt-1">{ADDRESS}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gold-light/10 text-gold-light border border-gold-light/20">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest">Contact</h4>
                <p className="text-luxury-white/60 font-light mt-1">
                  Phone: {PHONE}<br />
                  Email: {EMAIL}
                </p>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-gold-light hover:text-gold-light transition-all rounded-none">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-gold-light hover:text-gold-light transition-all rounded-none">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="h-[450px] w-full gold-gradient p-[1px] shadow-2xl overflow-hidden">
          <div className="w-full h-full bg-luxury-black relative flex items-center justify-center">
            {/* Placeholder for real Google Map */}
            <div className="absolute inset-0 opacity-40 grayscale pointer-events-none">
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80&w=800" alt="Map" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10 text-center bg-black/80 p-8 border border-gold-light/30 backdrop-blur-md">
              <MapPin size={48} className="text-gold-light mx-auto mb-4" />
              <h4 className="text-xl font-serif font-bold mb-2">Google Map View</h4>
              <p className="text-xs text-luxury-white/60 uppercase tracking-widest mb-6">Hatilung, Near Asian Public School</p>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 border border-gold-light text-gold-light text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-gold-light hover:text-black transition-all"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Success Stories" title="Client Feedback" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="luxury-card p-10 flex flex-col justify-between">
              <div>
                <div className="flex mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} className="text-gold-light fill-gold-light mr-1" />)}
                </div>
                <p className="text-luxury-white/80 italic font-light mb-8 leading-relaxed">
                  "{t.review}"
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 gold-gradient flex items-center justify-center font-bold text-black text-xs uppercase tracking-tighter">
                  {t.name[0]}
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <a href="#home" className="mb-8">
          <img 
            src="https://res.cloudinary.com/duy2rot8s/image/upload/v1776436251/gk_saloon_vxjyhk.png" 
            alt={SALON_NAME} 
            className="h-16 w-auto object-contain brightness-110" 
            referrerPolicy="no-referrer"
          />
        </a>
        <p className="text-luxury-white/40 text-xs font-light uppercase tracking-[0.3em] mb-12 max-w-xl leading-loose">
          Elevating personal grooming to an art form. Join us for a grooming experience that defines your character.
        </p>
        
        <div className="w-full border-t border-white/5 my-12" />
        
        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-luxury-white/30">
            &copy; {new Date().getFullYear()} GK SALON. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-white/60 hover:text-gold-light transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-white/60 hover:text-gold-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingCall = () => (
  <a 
    href={`tel:${PHONE}`} 
    className="fixed bottom-28 right-8 z-[100] w-16 h-16 bg-gold-light text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce-slow"
    aria-label="Call Us"
  >
    <Phone size={30} />
    <span className="absolute -top-1 -right-1 flex h-4 w-4">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
      <span className="relative inline-flex rounded-full h-4 w-4 bg-black"></span>
    </span>
  </a>
);

const FloatingWhatsApp = () => (
  <a 
    href={`https://wa.me/${WHATSAPP}`} 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce-slow"
    aria-label="Contact on WhatsApp"
  >
    <MessageCircle size={32} />
    <span className="absolute -top-2 -left-2 flex h-5 w-5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
      <span className="relative inline-flex rounded-full h-5 w-5 bg-gold-light"></span>
    </span>
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <OfferBanner />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Offers />
      <Staff />
      <Gallery />
      <Booking />
      <Testimonials />
      <ContactMap />
      <Footer />
      <FloatingCall />
      <FloatingWhatsApp />
    </div>
  );
}
