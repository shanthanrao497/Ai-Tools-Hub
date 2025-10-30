import React from 'react';
import { Page, ToolCategory } from '../../types';
import { TOOLS } from '../../constants';

interface ToolListPageProps {
  category: ToolCategory | null;
  onSelectTool: (toolId: string) => void;
  onNavigate: (page: Page) => void;
}

const ToolListPage: React.FC<ToolListPageProps> = ({ category, onSelectTool, onNavigate }) => {
  if (!category) {
    return (
      <div className="text-center">
        <p className="text-slate-400 mb-4">Please select a category first.</p>
        <button onClick={() => onNavigate(Page.Categories)} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors">
          Back to Categories
        </button>
      </div>
    );
  }

  const filteredTools = TOOLS.filter(tool => tool.category === category);

  return (
    <div>
      <div className="text-center mb-12">
        <button onClick={() => onNavigate(Page.Categories)} className="text-cyan-400 hover:text-cyan-300 mb-4 transition-colors">
          &larr; Back to Categories
        </button>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">{category} Tools</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTools.length > 0 ? (
          filteredTools.map(tool => (
            <div 
              key={tool.id} 
              onClick={() => onSelectTool(tool.id)}
              className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-lg shadow-lg p-6 flex flex-col text-center cursor-pointer hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:-translate-y-1"
            >
              <h2 className="text-xl font-bold mb-2 text-slate-100">{tool.name}</h2>
              <p className="text-slate-400 mb-4 flex-grow">{tool.description}</p>
              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                tool.price === 'Free' ? 'bg-green-500/20 text-green-300' : 
                tool.price === 'Paid' ? 'bg-red-500/20 text-red-300' : 
                'bg-blue-500/20 text-blue-300'
              }`}>
                {tool.price}
              </span>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-slate-400">No tools found in this category yet.</p>
        )}
      </div>
    </div>
  );
};

export default ToolListPage;