"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const categories = [
    { name: "Mother's Love", articles: ["A Mother’s Endless Love", "The Unconditional Love of a Mother", "Stories of Motherly Wisdom"] },
    { name: "Inspiration", articles: ["Inspiring Moms", "Celebrating the Strength of Single Moms", "Stories of Motherly Wisdom"] },
    { name: "Celebrations", articles: ["How to Plan a Memorable Mother’s Day Brunch", "Crafting Heartfelt Mother’s Day Cards", "Planning a Special Mother’s Day Family Gathering"] },
  ];

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden", background: "#fff", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div style={{ position: "relative", width: "100%", height: "60px", background: "#fff", borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "center", padding: "0 20px" }}>
        <button style={{ fontSize: "24px", fontWeight: "bold", color: "#000", background: "none", border: "none", cursor: "pointer" }}>≡</button>
        <h1 style={{ fontSize: "20px", fontWeight: "700", margin: "0 0 0 20px", color: "#000" }}>Mothers Day Blog</h1>
        <button style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>

      {/* Categories Section */}
      <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#000", marginBottom: "20px" }}>Categories</h2>
        {categories.map((category, index) => (
          <div key={index} style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#000", marginBottom: "10px" }}>{category.name}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
              {category.articles.map((article, articleIndex) => (
                <div key={articleIndex} style={{ background: "#e5e7eb", height: "200px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {isMounted ? (
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", background: "#d1d5db", opacity: 0.5 }}></div>
                      <svg style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                        <path d="M3 3h18v18H3z"></path>
                        <path d="M3 3l18 18M3 21l18-18"></path>
                      </svg>
                      <p style={{ position: "absolute", top: "10px", left: "10px", color: "#000", fontSize: "14px", margin: "0" }}>{article}</p>
                      <Link href={`/articles/${article.replace(/\s+/g, '-').toLowerCase()}`} style={{ position: "absolute", bottom: "10px", right: "10px", padding: "5px 10px", background: "#000", color: "#fff", textDecoration: "none", borderRadius: "4px" }}>Read More</Link>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ background: "#fff", padding: "40px 0", width: "100%", borderTop: "1px solid #e5e7eb", marginTop: "40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "14px", color: "#6b7280" }}>Mothers Day Blog</p>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href="#" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>Home</a>
            <a href="#" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>About</a>
            <a href="#" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>Categories</a>
            <a href="#" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}