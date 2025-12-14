import Image from "next/image";
import articles from "../data/articles";
import NavBar from "../components/NavBar";


export default function HomePage() {
  
  return (
    <main style={styles.container}>

      <NavBar />
      <h1 style={styles.heading}>Top Headlines</h1>
      <p style={styles.subheading}>Latest updates from across India</p>

      {/* TWO COLUMN GRID  */}
      <div style={styles.grid}>
        {articles.map((article) => (
          <div key={article.id} style={styles.card}>

            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={250}
              style={styles.image}
            />

            <h2 style={styles.title}>{article.title}</h2>
            <p style={styles.summary}>{article.summary}</p>

            <a href={`/articles/${article.id}`} style={styles.readMore}>
              Read More →
            </a>

          </div>
        ))}
      </div>
    </main>
  );
}

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },

  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "2px",
  },

  subheading: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },

  card: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "10px",
  },

  image: {
    width: "100%",
    height: "auto",
    borderRadius: "4px",
    marginBottom: "10px",
  },

  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "6px",
  },

  summary: {
    fontSize: "13px",
    color: "#444",
    marginBottom: "10px",
  },

  readMore: {
    fontSize: "13px",
    color: "#0b57d0",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
