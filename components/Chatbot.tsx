import React, { useState, useEffect, useRef } from 'react';
import { geminiChat } from '../services/geminiService';
import { Chat } from '@google/genai';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const chatInstance = geminiChat.startChat();
    if (chatInstance) {
      setChat(chatInstance);
      setMessages([{ text: "Hello! How can I help you find the perfect AI tool today?", sender: 'bot' }]);
    }
  }, []);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading || !chat) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await chat.sendMessageStream({ message: input });
      let text = '';
      
      const botMessageIndex = messages.length + 1;
      setMessages(prev => [...prev, { text: '', sender: 'bot' }]);

      for await (const chunk of result) {
        text += chunk.text;
        setMessages(prev => {
           const newMessages = [...prev];
           newMessages[botMessageIndex] = { text, sender: 'bot'};
           return newMessages;
        });
      }

    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting. Please try again later.", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!chat) {
    return null; // Don't render chatbot if Gemini service failed to initialize
  }

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-5 w-96 h-[500px] bg-slate-800/75 backdrop-blur-xl border border-slate-700/50 rounded-lg shadow-2xl flex flex-col z-50">
          <div className="p-4 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-t-lg">
            <h3 className="font-bold text-lg">AI Tool Recommender</h3>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
                <div className={`p-3 rounded-lg max-w-[80%] ${msg.sender === 'user' ? 'bg-fuchsia-600 text-white' : 'bg-slate-700 text-slate-200'}`}>
                  {msg.text || '...'}
                </div>
              </div>
            ))}
             <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-slate-700/50">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask for a tool..."
                className="flex-grow bg-slate-700 border border-slate-600 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-200"
                disabled={isLoading}
              />
              <button onClick={handleSend} className="bg-cyan-500 text-white px-4 rounded-r-md hover:bg-cyan-600 disabled:bg-cyan-800 transition-colors" disabled={isLoading}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;