
export const metadata = {
  title: "My News Portal",
  description: "Simple news website built with Next.js 13",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto p-4 bg-gray-100">
       

        {children}

        <footer className="mt-10 py-4 text-center text-gray-600 text-sm">
          © 2025 My News Portal
        </footer>
      </body>
    </html>
  );
}
