
import Link from 'next/link'
import ImageWithFallback from './ImageWithFallback'

export default function Hero({ article }) {
  if (!article) return null

  return (
    <div className="hero">
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <div style={{flex:1}}>
          <h2 className="hero-title">{article.title}</h2>
          <p className="hero-summary">{article.summary}</p>
          <p style={{marginTop:8, fontSize:13, color:'#777'}}>
            {new Date(article.publishedAt).toDateString()} • {article.category}
          </p>
          <p style={{marginTop:8}}>
            <Link href={`/articles/${article.slug}`}>Read more →</Link>
          </p>
        </div>

        <div style={{width:220, height:130, position:'relative'}}>
          <ImageWithFallback
            src={article.image || '/placeholder.jpg'}
            alt={article.title}
            fill
            style={{objectFit:'cover', borderRadius:8}}
          />
        </div>
      </div>
    </div>
  )
}
