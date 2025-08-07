import { NewsArticle } from '../types/news'

type Props = {
  article: NewsArticle
}

export default function NewsCard({ article }: Props) {
  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
      <p className="text-sm text-gray-600 mb-4">{article.description}</p>
      <div className="text-xs text-blue-600 font-medium">{article.source}</div>
    </a>
  )
}
