import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY;

let chat: Chat | null = null;

if (API_KEY) {
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are an expert AI tool recommender for a website called "AI Tools Hub". 
        Your goal is to help users find the perfect AI tool for their needs. 
        Be friendly, concise, and helpful. 
        Ask clarifying questions if the user's request is vague.
        Recommend tools from the following categories: Writing, Image Generation, Coding, Audio & Music, Video Generation, Productivity, Chatbots, Marketing.`,
      },
    });
  } catch (error) {
      console.error("Failed to initialize Gemini AI:", error);
  }
} else {
  console.warn("Gemini API key not found. Chatbot will be disabled.");
}

export const geminiChat = {
  startChat: (): Chat | null => {
    return chat;
  }
};