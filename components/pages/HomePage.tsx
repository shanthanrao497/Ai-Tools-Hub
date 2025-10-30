import React from 'react';
import { Page, Tool, ToolCategory } from '../../types';
import { TOOLS } from '../../constants';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onSelectCategory: (category: ToolCategory) => void;
  onSelectTool: (toolId: string) => void;
}

// FIX: Defined props for GlassCard and typed it as a React.FC to resolve TypeScript errors.
// This clarifies that `key` is a special React prop for lists and not a regular component prop.
interface GlassCardProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, onClick, className = '' }) => (
  <div 
    onClick={onClick} 
    className={`bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-pointer ${className}`}
  >
    {children}
  </div>
);


const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectCategory, onSelectTool }) => {
  const featuredToolIds = ['image-1', 'code-1', 'chat-1', 'chat-2', 'writer-1', 'video-1'];
  const featuredTools = featuredToolIds
    .map(id => TOOLS.find(tool => tool.id === id))
    .filter((tool): tool is Tool => tool !== undefined);
    
  const categories = Object.values(ToolCategory);

  return (
    <div className="space-y-20">
      <section className="text-center py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
          Discover the Future of AI
        </h1>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">Your curated hub for the best AI tools in productivity, creativity, and innovation.</p>
        <button onClick={() => onNavigate(Page.Categories)} className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold py-3 px-8 rounded-lg hover:scale-105 transition-transform">
          Explore All Tools
        </button>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTools.map(tool => (
            <GlassCard key={tool.id} onClick={() => onSelectTool(tool.id)}>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2 text-slate-100">{tool.name}</h3>
                <p className="text-slate-400">{tool.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Explore by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map(category => (
            <GlassCard key={category} onClick={() => onSelectCategory(category)}>
                <h3 className="font-semibold text-center text-slate-200">{category}</h3>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;