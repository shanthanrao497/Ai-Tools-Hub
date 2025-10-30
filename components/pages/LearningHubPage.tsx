import React from 'react';
import { LEARNING_RESOURCES } from '../../constants';

const LearningHubPage: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">Learning Hub</h1>
        <p className="text-lg text-slate-400 mt-4">Guides and tutorials to help you get the most out of AI.</p>
      </div>
      
      <div className="space-y-8 max-w-4xl mx-auto">
        {LEARNING_RESOURCES.map(resource => (
          <div key={resource.id} className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 p-6 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
              <h2 className="text-2xl font-bold text-slate-100 mb-2 sm:mb-0">{resource.title}</h2>
              <span className={`px-3 py-1 text-sm font-semibold rounded-full whitespace-nowrap ${
                resource.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' : 
                resource.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' : 
                'bg-red-500/20 text-red-300'
              }`}>
                {resource.difficulty}
              </span>
            </div>
            <p className="text-cyan-400 mb-4">{resource.type}</p>
            <div className="prose prose-invert max-w-none prose-p:text-slate-300">
              {resource.youtubeEmbedId && (
                <div className="aspect-video mb-4">
                  <iframe 
                    src={`https://www.youtube.com/embed/${resource.youtubeEmbedId}`}
                    title={resource.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              )}
              <p>{resource.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningHubPage;