import React from 'react';
import { Page } from '../types';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-700/50 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text mb-2">AI Tools Hub</h3>
            <p className="text-slate-400">Your curated directory for AI innovation.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-slate-200">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Page.Home); }} className="text-slate-400 hover:text-cyan-400">Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Page.Categories); }} className="text-slate-400 hover:text-cyan-400">Categories</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Page.LearningHub); }} className="text-slate-400 hover:text-cyan-400">Learning Hub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-slate-200">Connect</h4>
             <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-2xl">🐦</a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-2xl">🔗</a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-2xl">👾</a>
            </div>
          </div>
        </div>
        <div className="text-center text-slate-500 mt-8 pt-4 border-t border-slate-700/50">
          <p>&copy; {new Date().getFullYear()} AI Tools Hub. All rights reserved.</p>
          <p className="mt-2">Developed by Shanthan and Sathish.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;