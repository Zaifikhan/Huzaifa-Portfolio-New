
import React from 'react';
import { motion } from 'framer-motion';
// Added missing TrendingUp and Star imports
import { CheckCircle2, User, Award, Zap, TrendingUp, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Websites Built', value: '50+', icon: <Award className="w-6 h-6 text-blue-400" /> },
    { label: 'Lead Growth', value: '200%', icon: <TrendingUp className="w-6 h-6 text-purple-400" /> },
    { label: 'Client Satisfaction', value: '100%', icon: <Star className="w-6 h-6 text-pink-400" /> },
  ];

  const highlights = [
    "Loads slow 🐌 - Fixed!",
    "Looks outdated 👴 - Fixed!",
    "Or doesn’t bring sales 💸 - Solved!",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="blob -top-20 -left-20"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-gray-800 bg-gray-900 group">
              <img 
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1780&auto=format&fit=crop" 
                alt="Huzaifa 3D Avatar" 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-blue-500/30 z-20">
              <div className="text-4xl font-black text-blue-400">Years</div>
              <div className="text-gray-400 font-medium">Of Experience</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Hi! I’m <span className="text-gradient">Huzaifa</span> — your digital secret weapon.
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I’m a freelancer who lives at the intersection of creativity, code, and conversions. 
              I don’t just build websites. I build online assets that attract visitors, convert leads, and make business owners say:
            </p>
            
            <div className="glass p-6 rounded-2xl mb-8 border-l-4 border-blue-500 italic text-xl">
              “Wow… why didn’t I do this earlier?” 😮
            </div>

            <p className="text-gray-400 mb-10">
              With 50+ custom websites under my belt and years of experience in SEO, funnels, and automation, 
              I help businesses stop guessing and start growing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center space-x-3 text-gray-200 font-semibold">
                  <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="mb-2 flex justify-center md:justify-start">{stat.icon}</div>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
