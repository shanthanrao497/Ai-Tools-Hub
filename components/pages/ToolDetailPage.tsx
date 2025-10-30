import React from 'react';
import { Tool } from '../../types';

interface ToolDetailPageProps {
  tool: Tool | null;
}

const ToolDetailPage: React.FC<ToolDetailPageProps> = ({ tool }) => {
  if (!tool) {
    return <div className="text-center"><p>Tool not found. Please select a tool from the list.</p></div>;
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-lg shadow-2xl max-w-4xl mx-auto">
      <div className="text-center md:text-left mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">{tool.name}</h1>
        <p className="text-lg text-slate-400">{tool.category}</p>
        <div className="flex items-center mt-2 justify-center md:justify-start">
          <span className="text-yellow-400 text-xl">{ '★'.repeat(Math.round(tool.rating)) }</span>
          <span className="text-yellow-600/50 text-xl">{ '★'.repeat(5 - Math.round(tool.rating)) }</span>
          <span className="ml-2 text-slate-400">({tool.rating})</span>
        </div>
      </div>
      
      <p className="text-slate-300 text-lg mb-8">{tool.longDescription}</p>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-100">Key Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-slate-300">
          {tool.keyFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
                <span className="text-cyan-400 mr-2">✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-slate-900/50 p-4 rounded-lg">
         <span className={`px-4 py-2 text-lg font-semibold rounded-full ${
            tool.price === 'Free' ? 'bg-green-500/20 text-green-300' : 
            tool.price === 'Paid' ? 'bg-red-500/20 text-red-300' : 
            'bg-blue-500/20 text-blue-300'
          }`}>
            {tool.price}
          </span>
        <a href={tool.link} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform mt-4 md:mt-0">
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default ToolDetailPage;