import React, { useState } from 'react';
import { Page, Tool, ToolCategory } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import CategoriesPage from './components/pages/CategoriesPage';
import ToolListPage from './components/pages/ToolListPage';
import ToolDetailPage from './components/pages/ToolDetailPage';
import LearningHubPage from './components/pages/LearningHubPage';
import Chatbot from './components/Chatbot';
import { TOOLS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | null>(null);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const navigateTo = (page: Page) => setCurrentPage(page);

  const handleSelectCategory = (category: ToolCategory) => {
    setSelectedCategory(category);
    navigateTo(Page.ToolList);
  };

  const handleSelectTool = (toolId: string) => {
    const tool = TOOLS.find(t => t.id === toolId);
    if (tool) {
      setSelectedTool(tool);
      navigateTo(Page.ToolDetail);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage onNavigate={navigateTo} onSelectCategory={handleSelectCategory} onSelectTool={handleSelectTool} />;
      case Page.Categories:
        return <CategoriesPage onSelectCategory={handleSelectCategory} />;
      case Page.ToolList:
        return <ToolListPage category={selectedCategory} onSelectTool={handleSelectTool} onNavigate={navigateTo} />;
      case Page.ToolDetail:
        return <ToolDetailPage tool={selectedTool} />;
      case Page.LearningHub:
        return <LearningHubPage />;
      default:
        return <HomePage onNavigate={navigateTo} onSelectCategory={handleSelectCategory} onSelectTool={handleSelectTool}/>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header onNavigate={navigateTo} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Chatbot />
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;