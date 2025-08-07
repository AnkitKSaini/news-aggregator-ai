'use client'

import { useEffect, useState } from 'react'
import { fetchNews } from './utils/fetchNews'
import NewsCard from './components/NewsCard'
import { NewsArticle } from './types/news'

export default function HomePage() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      const data = await fetchNews()
      setArticles(data)
      setLoading(false)
    }

    load()
  }, [])

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10">
      <h1 className="text-center text-4xl font-bold mb-10 text-gray-800">
        🧠 News Aggregator AI
      </h1>

      {loading ? (
        <p className="text-center text-lg animate-pulse">Loading smart news...</p>
      ) : articles.length === 0 ? (
        <p className="text-center text-red-500">No articles found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <NewsCard key={idx} article={article} />
          ))}
        </div>
      )}
    </section>
  )
}
