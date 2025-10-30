import { Tool, ToolCategory, LearningResource } from './types';

export const TOOLS: Tool[] = [
  // Writing
  {
    id: 'writer-1',
    name: 'Notion AI',
    category: ToolCategory.Writing,
    description: 'AI writing assistant integrated directly into your Notion workspace.',
    longDescription: 'Notion AI helps you write faster, think bigger, and augment creativity, right inside Notion. It can summarize long documents, brainstorm ideas, translate text, and draft entire articles, saving you time and effort.',
    price: 'Paid',
    rating: 4.8,
    link: 'https://www.notion.so/product/ai',
    keyFeatures: ['Summarization', 'Content Generation', 'Action Item Extraction', 'Integrated Workflow'],
  },
  {
    id: 'writer-2',
    name: 'Grammarly',
    category: ToolCategory.Writing,
    description: 'Corrects grammar, spelling, and punctuation in real-time.',
    longDescription: 'Grammarly is more than just a spell checker. It helps improve your writing style, clarity, and tone, ensuring your message is always professional and clear. Perfect for emails, reports, and academic papers.',
    price: 'Freemium',
    rating: 4.7,
    link: 'https://www.grammarly.com/',
    keyFeatures: ['Advanced Grammar Checking', 'Style Suggestions', 'Plagiarism Detector', 'Browser Extension'],
  },

  // Image Generation
  {
    id: 'image-1',
    name: 'Midjourney',
    category: ToolCategory.Image,
    description: 'An independent research lab producing an AI that creates images from textual descriptions.',
    longDescription: 'Midjourney is renowned for creating highly artistic and coherent images from natural language prompts. Accessed through Discord, it offers powerful control for generating unique and beautiful artwork.',
    price: 'Paid',
    rating: 4.9,
    link: 'https://www.midjourney.com/',
    keyFeatures: ['Artistic Image Generation', 'High Coherence', 'Discord-based Interface', 'Active Community'],
  },
  {
    id: 'image-2',
    name: 'Artify',
    category: ToolCategory.Image,
    description: 'Turn text prompts into stunning AI-generated images.',
    longDescription: 'Unleash your creativity with Artify. Describe any image you can imagine, and our AI will bring it to life in various artistic styles. From photorealistic to abstract, the possibilities are endless.',
    price: 'Freemium',
    rating: 4.6,
    link: '#',
    keyFeatures: ['Text-to-Image Generation', 'Multiple Art Styles', 'High-Resolution Output', 'Image Upscaling'],
  },
  
  // Coding
  {
    id: 'code-1',
    name: 'GitHub Copilot',
    category: ToolCategory.Coding,
    description: 'Your AI pair programmer. Get AI-based code suggestions, right in your editor.',
    longDescription: 'GitHub Copilot uses the OpenAI Codex to suggest code and entire functions in real-time, right from your editor. It works with dozens of languages and helps you code faster with less work.',
    price: 'Paid',
    rating: 4.8,
    link: 'https://github.com/features/copilot',
    keyFeatures: ['AI Code Completion', 'Works in VS Code, etc.', 'Supports Many Languages', 'Context-aware Suggestions'],
  },
  {
    id: 'code-2',
    name: 'CodeCompanion',
    category: ToolCategory.Coding,
    description: 'AI pair programmer that helps you write better code, faster.',
    longDescription: 'CodeCompanion integrates with your favorite IDE to provide intelligent code completions, find bugs, and even write entire functions. It supports dozens of languages and frameworks.',
    price: 'Freemium',
    rating: 4.7,
    link: '#',
    keyFeatures: ['AI Code Completion', 'Bug Detection & Fixing', 'Unit Test Generation', 'Code Refactoring'],
  },

  // Audio & Music
  {
    id: 'audio-1',
    name: 'SoundScape AI',
    category: ToolCategory.Audio,
    description: 'Generate royalty-free background music for your projects.',
    longDescription: 'Need a soundtrack for your video, podcast, or game? SoundScape AI creates unique, high-quality music tracks tailored to your specified mood, genre, and length.',
    price: 'Freemium',
    rating: 4.5,
    link: '#',
    keyFeatures: ['Custom Music Generation', 'Multiple Genres', 'Mood-based Creation', 'Royalty-Free Licensing'],
  },

  // Video Generation
  {
    id: 'video-1',
    name: 'VidSynth',
    category: ToolCategory.Video,
    description: 'Create professional videos from text in minutes.',
    longDescription: 'VidSynth transforms your scripts or blog posts into engaging videos with realistic AI avatars, voiceovers, and stock footage. No camera or microphone needed.',
    price: 'Paid',
    rating: 4.6,
    link: '#',
    keyFeatures: ['Text-to-Video', 'AI Avatars', 'Multi-language Voiceovers', 'Template Library'],
  },

  // Productivity
  {
    id: 'prod-1',
    name: 'TaskMaster AI',
    category: ToolCategory.Productivity,
    description: 'Intelligent to-do list that organizes and prioritizes your tasks.',
    longDescription: 'TaskMaster AI analyzes your projects and deadlines to create an optimized daily schedule. It helps you focus on what matters most and achieve your goals faster.',
    price: 'Freemium',
    rating: 4.7,
    link: '#',
    keyFeatures: ['Smart Task Prioritization', 'Project Scheduling', 'Calendar Integration', 'Team Collaboration'],
  },

  // Chatbots
  {
    id: 'chat-1',
    name: 'ChatGPT',
    category: ToolCategory.Chatbots,
    description: 'A conversational AI model by OpenAI that can answer questions, write essays, and code.',
    longDescription: 'ChatGPT is a powerful language model developed by OpenAI. It can engage in conversational dialogue, understand context, and generate human-like text across a vast range of subjects. It is widely used for content creation, brainstorming, and as a learning tool.',
    price: 'Freemium',
    rating: 4.9,
    link: 'https://chat.openai.com/',
    keyFeatures: ['Natural Language Conversation', 'Content Creation', 'Code Generation', 'Extensive Knowledge Base'],
  },
  {
    id: 'chat-2',
    name: 'Google Gemini',
    category: ToolCategory.Chatbots,
    description: 'Google\'s largest and most capable multimodal AI model.',
    longDescription: 'Gemini is a multimodal AI model from Google, capable of understanding and operating across text, images, audio, video, and code. It is designed for advanced reasoning, understanding, and conversational abilities.',
    price: 'Free',
    rating: 4.8,
    link: 'https://gemini.google.com/',
    keyFeatures: ['Multimodal Reasoning', 'Advanced Conversation', 'Code Understanding', 'Integrated with Google Ecosystem'],
  },
  
  // Marketing
  {
    id: 'market-1',
    name: 'AdOptimize',
    category: ToolCategory.Marketing,
    description: 'AI-powered platform for optimizing your digital ad campaigns.',
    longDescription: 'AdOptimize uses machine learning to analyze your ad performance across platforms, providing insights and automated adjustments to maximize your ROI. Spend smarter, not harder.',
    price: 'Paid',
    rating: 4.7,
    link: '#',
    keyFeatures: ['Cross-Platform Analytics', 'Automated Bid Management', 'Audience Targeting Suggestions', 'A/B Testing'],
  },
];


export const LEARNING_RESOURCES: LearningResource[] = [
    {
        id: 'lr-1',
        title: 'Beginner\'s Guide to AI Prompt Engineering',
        type: 'Guide',
        difficulty: 'Beginner',
        youtubeEmbedId: 'd_q_d-i8x0g',
        content: 'Learn the fundamentals of writing effective prompts for AI models like GPT and Midjourney. This guide covers basic techniques to get better results from your AI tools, turning your ideas into precise outputs.',
    },
    {
        id: 'lr-2',
        title: 'Advanced AI Image Generation Tutorial',
        type: 'Tutorial',
        difficulty: 'Intermediate',
        content: 'Dive deeper into AI image creation. This tutorial explores advanced parameters, style blending, and negative prompts to give you fine-grained control over your generated artwork. Prerequisite: Basic understanding of text-to-image models.',
    },
    {
        id: 'lr-3',
        title: 'Integrating AI APIs into Your Applications',
        type: 'Tutorial',
        difficulty: 'Expert',
        youtubeEmbedId: '4AiAfYv3k4g',
        content: 'For developers looking to leverage AI, this expert tutorial walks through the process of integrating a third-party AI API (like OpenAI or Gemini) into a web application. Covers authentication, request handling, and error management.',
    },
    {
        id: 'lr-4',
        title: 'Using AI for Productivity: A Comprehensive Guide',
        type: 'Guide',
        difficulty: 'Beginner',
        content: 'Discover how to use AI tools to streamline your workflow, manage your time, and automate repetitive tasks. This guide covers AI-powered calendars, note-taking apps, email assistants, and project management tools.',
    }
];