import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ShoppingBag, 
  Search, 
  ArrowRight, 
  Star, 
  Instagram, 
  Twitter, 
  Facebook, 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [view, setView] = useState('landing'); // 'landing', 'login', 'signup'
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (newView) => {
    setView(newView);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans text-white selection:bg-red-500 selection:text-white">
      {/* Dynamic Background Gradient */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-slate-950 to-blue-900/40" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-600/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer" onClick={() => navigateTo('landing')}>
              <span className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                AROMI
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigateTo('landing')} className="hover:text-red-400 transition-colors">Home</button>
              <a href="#collections" className="hover:text-red-400 transition-colors">Collections</a>
              <a href="#about" className="hover:text-red-400 transition-colors">About</a>
              <div className="flex items-center space-x-4 ml-8">
                <button onClick={() => navigateTo('login')} className="px-4 py-2 hover:text-blue-400 transition-colors">Login</button>
                <button onClick={() => navigateTo('signup')} className="px-6 py-2 bg-gradient-to-r from-red-600 to-blue-600 rounded-full font-medium hover:shadow-lg hover:shadow-red-500/20 transition-all active:scale-95">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                <button onClick={() => navigateTo('landing')} className="block w-full text-left py-2">Home</button>
                <button className="block w-full text-left py-2">Collections</button>
                <button onClick={() => navigateTo('login')} className="block w-full text-left py-2 text-blue-400">Login</button>
                <button onClick={() => navigateTo('signup')} className="block w-full text-center py-3 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl">Sign Up</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {view === 'landing' && <LandingPage onGetStarted={() => navigateTo('signup')} />}
        {view === 'login' && <AuthPage type="login" onSwitch={() => setView('signup')} />}
        {view === 'signup' && <AuthPage type="signup" onSwitch={() => setView('login')} />}
      </main>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">AROMI</span>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Redefining the essence of luxury through scent. Crafted for those who dare to be different.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-red-500" />
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"><ArrowRight size={20} /></button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© 2024 Aromi Fragrances. All rights reserved.</p>
            <div className="flex space-x-6">
              <Instagram size={20} className="hover:text-white cursor-pointer" />
              <Twitter size={20} className="hover:text-white cursor-pointer" />
              <Facebook size={20} className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LandingPage({ onGetStarted }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                New Collection 2024
              </span>
              <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
                Scent of <br />
                <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Elegance
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
                Experience the fusion of rare botanicals and modern chemistry. Aromi brings you a curated selection of scents that linger in memory.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={onGetStarted}
                  className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-red-500 hover:text-white transition-all group"
                >
                  Shop Now <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-full font-bold hover:bg-white/5 transition-all">
                  View Lookbook
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
                <img 
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800" 
                  alt="Luxury Perfume" 
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-black/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-black" alt="User" />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold">12k+ Happy Clients</p>
                    <div className="flex text-yellow-500"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="collections" className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Signature Collections</h2>
            <p className="text-gray-400">Handcrafted masterpieces for every mood and occasion.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Midnight Rose", price: "$120", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600", color: "from-red-500" },
              { title: "Oceanic Drift", price: "$95", img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600", color: "from-blue-500" },
              { title: "Velvet Amber", price: "$145", img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=600", color: "from-purple-500" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10"
              >
                <img src={item.img} alt={item.title} className="w-full h-80 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-red-400 font-bold">{item.price}</span>
                  </div>
                  <button className="w-full mt-4 py-3 rounded-xl border border-white/10 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                    Add to Cart <ShoppingBag size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AuthPage({ type, onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-slate-900/50 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">
              {type === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-400">
              {type === 'login' ? 'Enter your details to access your account' : 'Join the Aromi community today'}
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {type === 'signup' && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {type === 'login' && (
              <div className="flex justify-end">
                <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Forgot password?</button>
              </div>
            )}

            <button className="w-full py-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-red-500/20 transition-all active:scale-[0.98] mt-4">
              {type === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              {type === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
              <button 
                onClick={onSwitch}
                className="text-white font-bold hover:underline decoration-red-500 underline-offset-4"
              >
                {type === 'login' ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px bg-white/10 flex-1"></div>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Or continue with</span>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
              <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
              <Facebook className="w-5 h-5 text-blue-500" fill="currentColor" />
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}