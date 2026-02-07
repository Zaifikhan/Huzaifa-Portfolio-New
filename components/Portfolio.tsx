
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Plus, X, Zap, Layers, Trophy, ArrowRight } from 'lucide-react';

interface ProjectDetails {
  title: string;
  category: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  link: string;
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  const projects: ProjectDetails[] = [
    {
      title: "E-Commerce Growth Machine",
      category: "WordPress / Sales Funnel",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80",
      description: "A high-performance online store built for a fashion retailer, focusing on speed and conversion rate optimization.",
      challenge: "The client was losing 70% of mobile traffic due to 5s+ load times and a clunky 5-step checkout process.",
      solution: "We re-architected the site using a lightweight custom theme, implemented server-side caching, and reduced checkout to a seamless 1-page experience.",
      results: ["210% Sales Increase", "0.8s Page Load", "12% Conv. Rate"],
      stack: ["WooCommerce", "Redis", "Stripe", "Custom WP Theme"],
      link: "#"
    },
    {
      title: "Coach Landing Page",
      category: "Conversion Design",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      description: "A psychological, story-driven landing page for a high-ticket business coach.",
      challenge: "Cold traffic wasn't converting because the previous page lacked authority and trust signals.",
      solution: "Designed a long-form sales page using the PAS (Problem-Agitation-Solution) framework, integrated with video testimonials and automated email follow-ups.",
      results: ["40% Lead Rate", "5x ROAS", "Fully Automated"],
      stack: ["Elementor Pro", "ActiveCampaign", "Figma", "Zapier"],
      link: "#"
    },
    {
      title: "Local SEO System",
      category: "Marketing Automation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "An automated local SEO infrastructure for a multi-location dental clinic.",
      challenge: "The clinic was invisible on Google Maps for key terms like 'Emergency Dentist' in their area.",
      solution: "Built location-specific landing pages with dynamic content insertion and automated GMB review generation campaigns.",
      results: ["#1 Ranking for 10+ Keywords", "300% More Calls", "Automated Reviews"],
      stack: ["Next.js", "Google Business Profile API", "Schema Markup"],
      link: "#"
    },
    {
      title: "Corporate Website Redesign",
      category: "UI/UX Development",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      description: "A modern, accessible corporate identity for a fintech startup.",
      challenge: "The old site looked like it was from 2010, hurting credibility with enterprise partners.",
      solution: "Developed a sleek, dark-mode compatible UI with micro-interactions that communicate innovation and reliability.",
      results: ["50% Lower Bounce Rate", "Award Winning UI", "Enterprise Ready"],
      stack: ["React", "Tailwind CSS", "Framer Motion", "WebGL"],
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative z-20">
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
              onClick={() => setSelectedProject(project)}
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

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-4xl bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-2/5 h-64 md:h-auto relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-8 md:p-10">
                  <div className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">{selectedProject.category}</div>
                  <h3 className="text-3xl font-black mb-6">{selectedProject.title}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-2 text-red-400 font-bold mb-2">
                        <Zap className="w-4 h-4" />
                        <span>The Challenge</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.challenge}</p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 text-green-400 font-bold mb-2">
                        <Layers className="w-4 h-4" />
                        <span>The Solution</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.solution}</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                      <div className="flex items-center space-x-2 text-yellow-400 font-bold mb-3">
                        <Trophy className="w-4 h-4" />
                        <span>Key Results</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {selectedProject.results.map((result, i) => (
                          <div key={i} className="text-center bg-gray-900 rounded-lg p-2">
                            <span className="text-xs font-bold text-gray-200 block">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Tech Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stack.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-medium text-gray-300 border border-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-800 flex justify-end">
                    <a href={selectedProject.link} className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all text-sm">
                      <span>Visit Live Site</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
