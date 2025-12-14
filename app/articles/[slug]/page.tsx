
import articles from "../../../data/articles";
import Image from "next/image";

export default function ArticlePage({ params }) {
  const article = articles.find((a) => a.id === params.id);  //Dynamic route based on article ID

  if (!article) return <p>Article not found.</p>;

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>{article.title}</h1>
      <p style={styles.date}>Published on: {article.date}</p>
      {/* Image optimization with Next.js Image component */}
      <Image
        src={article.image}
        alt={article.title}
        width={900}
        height={450}
        style={styles.image}
      />

      <p style={styles.content}>{article.content}</p>
    </main>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Georgia, serif",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  date: {
    color: "#777",
    marginBottom: "20px",
  },
  image: {
    borderRadius: "8px",
    marginBottom: "20px",
  },
  content: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#444",
  },
};
