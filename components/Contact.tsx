
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const contactDetails = [
    { 
      icon: <Mail />, 
      label: 'Email', 
      value: 'hafizhuzaifa2005@gmail.com',
      href: 'mailto:hafizhuzaifa2005@gmail.com'
    },
    { 
      icon: <MapPin />, 
      label: 'Location', 
      value: 'Swabi, KP',
      href: null
    },
    { 
      icon: <Phone />, 
      label: 'WhatsApp', 
      value: '+923 149525452',
      href: 'https://wa.me/923149525452'
    }
  ];

  const socialLinks = [
    { Icon: Github, href: "https://github.com/Zaifikhan" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/hafiz-huzaifa/" },
    { Icon: Twitter, href: "#" }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="blob bottom-20 right-20"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-sm font-black text-green-500 uppercase tracking-[0.3em] mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8">Let’s Work Together</h3>
            <p className="text-gray-400 mb-10 text-lg">
              Stop guessing and start growing. I’ll treat your business like my own. 
              <span className="block mt-2 font-bold text-white">Except I won’t eat your snacks. 😄</span>
            </p>

            <div className="space-y-6">
              {contactDetails.map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-blue-400 border border-gray-800 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500 uppercase tracking-widest">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-bold hover:text-blue-400 transition-colors block truncate">
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-bold">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex space-x-4">
              {socialLinks.map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href}
                  target={href !== '#' ? "_blank" : undefined}
                  rel={href !== '#' ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all border border-gray-800"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 glass p-10 rounded-3xl border border-gray-800"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Subject</label>
                <select className="w-full bg-gray-950 border border-gray-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                  <option>WordPress Development</option>
                  <option>Landing Page Design</option>
                  <option>SEO Strategy</option>
                  <option>Automation Setup</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit"
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all transform hover:scale-[1.02]"
                >
                  <span>Send Proposal</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
