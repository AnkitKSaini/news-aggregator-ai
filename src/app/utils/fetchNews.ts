import { NewsArticle } from '@/types/news'

export async function fetchNews(): Promise<NewsArticle[]> {
  return [
    {
      title: "AI Revolutionizes News Consumption",
      description: "AI is now helping users read smarter and faster.",
      url: "https://example.com/ai-news",
      source: "TechCrunch"
    },
    {
      title: "OpenAI’s New Model Changes the Game",
      description: "The latest GPT model is powering smarter applications.",
      url: "https://example.com/openai",
      source: "The Verge"
    }
  ]
}
