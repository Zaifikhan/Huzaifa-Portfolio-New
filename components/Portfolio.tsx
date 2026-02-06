
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Plus } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Growth Machine",
      category: "WordPress / Sales Funnel",
      image: "https://picsum.photos/seed/p1/600/400",
      link: "#"
    },
    {
      title: "Coach Landing Page",
      category: "Conversion Design",
      image: "https://picsum.photos/seed/p2/600/400",
      link: "#"
    },
    {
      title: "Local SEO System",
      category: "Marketing Automation",
      image: "https://picsum.photos/seed/p3/600/400",
      link: "#"
    },
    {
      title: "Corporate Website Redesign",
      category: "UI/UX Development",
      image: "https://picsum.photos/seed/p4/600/400",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-black text-purple-500 uppercase tracking-[0.3em] mb-4">Showcase</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6">🧾 Portfolio</h3>
            <p className="text-gray-400 text-lg">
              Each designed with one goal in mind: <span className="text-white font-bold">Make money, not just look pretty.</span>
            </p>
          </div>
          <a 
            href="https://huzaifa-works.great-site.net/" 
            className="flex items-center space-x-2 text-white font-bold hover:text-blue-400 transition-colors group"
          >
            <span>View Full Portfolio</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[16/10] cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-sm text-blue-400 font-bold uppercase tracking-widest mb-2">{project.category}</div>
                <h4 className="text-2xl font-black mb-4">{project.title}</h4>
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm flex items-center space-x-2">
                    <span>View Project</span>
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
