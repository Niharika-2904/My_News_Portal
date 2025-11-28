# 📰 My News Portal

This project is a responsive News Portal Website that replicates a modern news homepage using Next.js, with dynamic article pages, optimized images, and mock JSON data for news content.

## 🚀 Live Preview (Localhost Output)


<img width="1066" height="423" alt="Screenshot (226)" src="https://github.com/user-attachments/assets/836a7164-dcb2-4260-a0b0-292ec3c397c9" />

## 📌 Features Implemented
✅  Homepage with Top Headlines -

* Displays latest news cards
* Each card includes image, title, summary, date, and "Read more" link
* Real images added from /public folder (sports.jpg, climate.jpg, etc.)

✅ Dynamic Article Pages

* Each article page shows: Full-size banner image
* Complete news content: Title + Article + date

✅ Image Optimization

* All images use Next.js <Image> component.

✅ Fake API Using Local JSON

* Stored in: /data/articles.js

✅ Responsive UI

* Uses CSS for layout
* Mobile + Desktop supported
* Grid layout adjusts to screen width

✅ Next.js App Router

* Project uses latest App Router format:
     - `app/page.tsx ` 
     - `app/articles/[slug]/page.tsx`

## 📁 Project Structure
```
my-news-portal/
│
├── app/
│   ├── page.tsx                    // Homepage
│   ├── layout.tsx                  // Layout wrapper
│   └── articles/
│       └── [slug]/
│           └── page.tsx            // Dynamic article page
│
├── components/
│   ├── NavBar.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── ArticleCard.js
│   ├── ImageWithFallback.js
│   └── Loading.js
│
├── data/
│   └── articles.js                 // Fake API data source
│
├── public/
│   ├── sports.jpg
│   ├── climate.jpg
│   ├── space.jpg
│   └── techno.jpg
│
├── styles/
│   └── globals.css
│
└── README.md
```


# 🎨 Design Document

 🧠 Layout Decisions:
 
 * A clean two-column grid for desktop
 * Single column on mobile
 * Hero title at the top to resemble news portals
 * Article cards kept simple for readability

🗃 Data Fetching Strategy:

* Used static JSON data instead of external API because:
* Easy to control the content
* No API key required
* Fast build and loading
* Equivalent to:
  - Static Generation
  - Very fast, best for news homepage

## 🧩 Components Explanation
| Component                    | Description                     |
| ---------------------------- | ------------------------------- |
| **NavBar.js**                | Navigation menu                 |
| **Hero.js**                  | Top heading section             |
| **ArticleCard.js**           | Renders each article card       |
| **ImageWithFallback.js**     | Loads fallback image if missing |
| **Footer.js**                | Footer section                  |
| **Loading.js**               | Loading UI                      |
| **articles/[slug]/page.tsx** | Dynamic article page            |

## 🧪 Testing & Edge Cases
✔  Missing Image - ImageWithFallback shows placeholder.

✔  Invalid Article Slug - Shows: Article not found.

✔  No Articles Found - Displays fallback: No news available.

✔  Long Headlines - Text wraps elegantly without breaking layout.

✔  Loading State - Shows a loading placeholder while page is preparing.

## 🤖 AI Usage & Reflection
✔ How AI Helped -

* Code boilerplate generation
* CSS improvements
* Documentation formatting
* Creating sample news content

✔ Where AI was wrong -

* Provided incorrect Next.js 12 routing syntax
* Suggested Tailwind even though CSS was used
* Incorrect image paths (fixed manually)

✔ My Manual Improvements - 

* Wrote custom logic for slug routing
* Implemented fallback image component
* Adjusted layout for responsiveness
* Added real news images from public folder

## 🏁 How to Run the Project
Install packages:
 `npm install`

Start development server:
  `npm run dev`

Now open:
👉 http://localhost:3000

## 👤 Author:-

NIHARIKA SAXENA 
