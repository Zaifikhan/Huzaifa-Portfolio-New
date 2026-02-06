
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Globe, Search, Zap, MousePointer2, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'WordPress Development',
      description: 'Custom, fast, SEO-friendly WordPress websites — no bloated themes, no unnecessary plugins, no stress.',
      icon: <Globe className="w-8 h-8" />,
      color: 'blue'
    },
    {
      title: 'Landing Page Design',
      description: 'High-converting landing pages that turn visitors into leads, leads into customers, and customers into fans.',
      icon: <Layout className="w-8 h-8" />,
      color: 'purple'
    },
    {
      title: 'SEO & Marketing',
      description: 'On-page SEO, local SEO, content strategy, and traffic systems designed to grow your business organically.',
      icon: <Search className="w-8 h-8" />,
      color: 'pink'
    },
    {
      title: 'Automation',
      description: 'Zapier, Make, CRM automation — because your business should run while you sleep. 😴💼',
      icon: <Settings className="w-8 h-8" />,
      color: 'indigo'
    }
  ];

  const colorMap: any = {
    blue: 'border-blue-500/30 text-blue-400 group-hover:bg-blue-600',
    purple: 'border-purple-500/30 text-purple-400 group-hover:bg-purple-600',
    pink: 'border-pink-500/30 text-pink-400 group-hover:bg-pink-600',
    indigo: 'border-indigo-500/30 text-indigo-400 group-hover:bg-indigo-600'
  };

  return (
    <section id="services" className="py-24 bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Solutions</h2>
          <h3 className="text-4xl md:text-5xl font-black">🛠️ What I Do</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group glass p-8 rounded-3xl border ${colorMap[service.color].split(' ')[0]} transition-all duration-500 cursor-default`}
            >
              <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 ${colorMap[service.color].split(' ')[1]} group-hover:text-white group-hover:scale-110`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 glass p-10 rounded-3xl border border-gray-800 text-center max-w-4xl mx-auto">
          <h4 className="text-2xl font-black mb-10">🧠 How I Work</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Listen', desc: 'Understand your goals' },
              { title: 'Strategize', desc: 'No random designs' },
              { title: 'Build', desc: 'Performance first' },
              { title: 'Optimize', desc: 'Focused on results' }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-black text-white/5 absolute -top-4 -left-2">{i + 1}</div>
                <div className="relative z-10 font-bold text-lg mb-1">{step.title}</div>
                <div className="text-gray-500 text-sm">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
