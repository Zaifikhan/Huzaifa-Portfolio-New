
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Coffee, ArrowRight } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <ThreeBackground />
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 w-fit px-4 py-1.5 rounded-full mb-6"
          >
            <SparkleIcon className="text-blue-400 w-4 h-4" />
            <span className="text-blue-400 text-xs font-bold tracking-wider uppercase">Results Driven Expert</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 tracking-tight"
          >
            <span className="block">🚀 Turning Clicks into Clients</span>
            <span className="text-gradient block">& Websites into Money Machines</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            Hi, I’m <span className="text-white font-bold">Huzaifa</span> — a Digital Marketing Expert and WordPress Developer who builds websites that don’t just look good… they work harder than your coffee machine. ☕💻
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a 
              href="#portfolio" 
              className="group bg-white text-gray-950 px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1"
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-gray-800 transition-all transform hover:-translate-y-1"
            >
              <span>Let’s Work Together</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent mx-auto"></div>
        <span className="text-[10px] uppercase tracking-widest mt-2 block">Scroll</span>
      </motion.div>
    </section>
  );
};

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L14.5 9L21.5 11.5L14.5 14L12 21L9.5 14L2.5 11.5L9.5 9L12 2Z" />
  </svg>
);

export default Hero;
