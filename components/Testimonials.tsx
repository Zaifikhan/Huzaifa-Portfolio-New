
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Huzaifa transformed my broken website into a professional, fast, and high-converting machine. Highly recommended!",
      name: "Alex Johnson",
      role: "E-com Owner",
      image: "https://picsum.photos/seed/a1/100/100"
    },
    {
      text: "He doesn’t just design — he thinks like a marketer. My leads doubled after the redesign.",
      name: "Sarah Miller",
      role: "Tech Startup CEO",
      image: "https://picsum.photos/seed/a2/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-950/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-pink-500 uppercase tracking-[0.3em] mb-4">Results</h2>
          <h3 className="text-4xl md:text-5xl font-black">💬 Testimonials</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl border border-gray-800 relative"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5" />
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 italic">“{t.text}”</p>
              <div className="flex items-center space-x-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-pink-500/30" />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 glass px-8 py-4 rounded-full border border-gray-800">
            <span className="text-gray-400">Trusted by over 50+ businesses worldwide</span>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(n => (
                <img 
                  key={n} 
                  src={`https://picsum.photos/seed/${n+10}/50/50`} 
                  className="w-10 h-10 rounded-full border-2 border-gray-900" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
