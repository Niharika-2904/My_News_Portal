// components/ArticleCard.js
import Link from 'next/link'
import ImageWithFallback from './ImageWithFallback'

export default function ArticleCard({ article }) {
  return (
    <Link href={`/articles/${article.slug}`} style={{display:'block'}}>
      <div className="card">
        <div style={{width:120, height:80, position:'relative', flex: '0 0 120px'}}>
          <ImageWithFallback
            src={article.image || '/placeholder.jpg'}
            alt={article.title}
            fill
            style={{objectFit:'cover', borderRadius:6}}
          />
        </div>

        <div className="card-body">
          <h3 className="card-title">{article.title}</h3>
          <p className="card-summary">{article.summary}</p>
          <p style={{marginTop:6, fontSize:12, color:'#888'}}>{new Date(article.publishedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  )
}
