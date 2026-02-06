
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, Zap, Send } from 'lucide-react';
import { generateMarketingStrategy } from '../services/geminiService';

const MarketingAI: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [goals, setGoals] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !businessType || !goals) return;

    setLoading(true);
    setResult(null);
    try {
      const response = await generateMarketingStrategy(businessName, businessType, goals);
      setResult(response || "Sorry, I couldn't generate a strategy right now. Let's talk directly!");
    } catch (error) {
      setResult("Oops! Something went wrong. My AI brain is having a coffee break. ☕");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-24 bg-gradient-to-b from-transparent to-blue-900/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2.5rem] border border-blue-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles size={120} className="text-blue-400" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                <Zap className="text-white w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black">Free Growth Strategy</h2>
            </div>
            
            <p className="text-gray-400 mb-10 text-lg">
              Want to see how I think? Tell me about your business and my AI sidekick will generate a custom 3-step growth plan for you instantly.
            </p>

            <form onSubmit={handleGenerate} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <input 
                type="text" 
                placeholder="Business Name" 
                className="bg-gray-950/50 border border-gray-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="Business Type (e.g. SaaS, Local Gym)" 
                className="bg-gray-950/50 border border-gray-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
              />
              <div className="md:col-span-2">
                <textarea 
                  placeholder="What's your #1 goal right now?" 
                  className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all"
                  rows={2}
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <button 
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all transform hover:scale-[1.01]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin w-5 h-5" />
                      <span>Thinking like a marketer...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Generate My Strategy</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            <AnimatePresence>
              {result && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blue-600/10 border border-blue-500/30 p-8 rounded-3xl"
                >
                  <div className="text-blue-400 font-bold mb-4 flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>HUZAIFA'S AI ADVICE:</span>
                  </div>
                  <div className="prose prose-invert max-w-none text-gray-200 whitespace-pre-line leading-relaxed">
                    {result}
                  </div>
                  <div className="mt-8 pt-6 border-t border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm">Like this strategy? Let's make it real.</p>
                    <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">Let's Talk Business</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingAI;
