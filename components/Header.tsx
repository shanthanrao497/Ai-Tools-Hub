import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/75 backdrop-blur-lg border-b border-slate-700/50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text" onClick={() => onNavigate(Page.Home)}>
          AI Tools Hub
        </div>
        <ul className="flex space-x-6">
          <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Page.Home); }} className="text-slate-300 hover:text-cyan-400 transition-colors">Home</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Page.Categories); }} className="text-slate-300 hover:text-cyan-400 transition-colors">Categories</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Page.LearningHub); }} className="text-slate-300 hover:text-cyan-400 transition-colors">Learning Hub</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;