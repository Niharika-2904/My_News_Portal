"use client";

import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const styles = {
    navbar: {
      width: "100%",
      padding: "20px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #ddd",
      fontFamily: "Arial, sans-serif",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    menu: {
      display: "flex",
      gap: "30px",
      fontSize: "16px",
    },
    link: (isActive) => ({
      textDecoration: "none",
      color: isActive ? "#3b82f6" : "black",
      fontWeight: isActive ? "bold" : "500",
    }),
  };

  return (
    <nav style={styles.navbar}>
      {/* LEFT SIDE LOGO */}
      <div style={styles.logo}>My News Portal</div>

      {/* RIGHT SIDE MENU */}
      <div style={styles.menu}>
        <a href="/" style={styles.link(pathname === "/")}>Home</a>
        <a href="/india" style={styles.link(pathname === "/india")}>India</a>
        <a href="/sports" style={styles.link(pathname === "/sports")}>Sports</a>
        <a href="/world" style={styles.link(pathname === "/world")}>World</a>
      </div>
    </nav>
  );
}
