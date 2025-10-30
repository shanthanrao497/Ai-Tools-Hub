export enum Page {
  Home = 'HOME',
  Categories = 'CATEGORIES',
  ToolList = 'TOOL_LIST',
  ToolDetail = 'TOOL_DETAIL',
  LearningHub = 'LEARNING_HUB',
}

export enum ToolCategory {
  Writing = 'Writing',
  Image = 'Image Generation',
  Coding = 'Coding',
  Audio = 'Audio & Music',
  Video = 'Video Generation',
  Productivity = 'Productivity',
  Chatbots = 'Chatbots',
  Marketing = 'Marketing',
}

export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  description: string;
  longDescription: string;
  price: 'Free' | 'Paid' | 'Freemium';
  rating: number;
  link: string;
  keyFeatures: string[];
}

export interface LearningResource {
  id: string;
  title: string;
  type: 'Guide' | 'Tutorial';
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  youtubeEmbedId?: string;
  content: string;
}