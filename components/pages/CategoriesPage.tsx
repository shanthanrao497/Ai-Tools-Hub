import React from 'react';
import { ToolCategory } from '../../types';

interface CategoriesPageProps {
  onSelectCategory: (category: ToolCategory) => void;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ onSelectCategory }) => {
  const categories = Object.values(ToolCategory);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">Tool Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <div 
            key={category} 
            onClick={() => onSelectCategory(category)}
            className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 p-8 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:-translate-y-1"
          >
            <h2 className="text-2xl font-semibold text-slate-100">{category}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;