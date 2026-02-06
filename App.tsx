
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Rocket, Coffee, Code, Layout, TrendingUp, Cpu, 
  ChevronRight, Star, ExternalLink, Send, Sparkles 
} from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import MarketingAI from './components/MarketingAI';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'AI Tool', href: '#ai-tool' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black text-gradient tracking-tighter cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            HUZAIFA.
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-gray-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-bold border-b border-gray-800 pb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <MarketingAI />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-3xl font-black text-gradient mb-4">HUZAIFA.</div>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Building digital assets that work harder than your coffee machine. ☕💻
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            {/* Social icons placeholder */}
            {['Twitter', 'LinkedIn', 'Instagram', 'Github'].map(s => (
              <a key={s} href="#" className="text-gray-500 hover:text-white transition-colors">{s}</a>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Huzaifa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
