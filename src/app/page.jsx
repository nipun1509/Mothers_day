"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./components/Menu"; // Adjust path based on your router (e.g., "../components/Menu" for Pages Router)

export default function Home() {
  const [storyIndex, setStoryIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [categoryScroll, setCategoryScroll] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const categories = ["Mother's Love", "Family Bonding", "Gift Ideas", "Inspiration", "Health Tips", "Celebrations"];
  const stories = [
    { id: "inspiring-moms", category: "Inspiration", title: "Inspiring Moms", excerpt: "Stories of mothers who changed the world with their love." },
    { id: "a-mothers-love", category: "Mother's Love", title: "A Mother’s Endless Love", excerpt: "A heartfelt tribute to my mom’s unwavering sacrifices." },
    { id: "healthy-habits-for-moms", category: "Health Tips", title: "Healthy Habits for Moms", excerpt: "Tips for mothers to stay healthy and energized on Mother’s Day." }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleStoryChange = (direction) => {
    setStoryIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return stories.length - 1;
      if (newIndex >= stories.length) return 0;
      return newIndex;
    });
  };

  const handleCategoryScroll = (direction) => {
    const cardWidth = 180;
    const gap = 16;
    const totalWidth = cardWidth + gap;
    const maxScroll = (categories.length - 6) * totalWidth;
    setCategoryScroll((prev) => Math.max(0, Math.min(prev + direction * totalWidth, maxScroll)));
  };

  const margin = "80px";
  const visibleWidth = (6 * 180) + (5 * 16);

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden", background: "#fff" }}>
      {/* Header with Permanent Background Image */}
      <div style={{ position: "relative", width: "100%", height: "600px" }}>
        {/* Background Image */}
        <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }}>
          {isMounted ? (
            <Image
              src="/images/permanent.png"
              alt="Mother's Day blog header background"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          ) : (
            <div style={{ width: "100%", height: "100%", background: "#e5e7eb" }} /> // Placeholder during SSR
          )}
        </div>

        {/* Header Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: `24px ${margin}`,
            width: `${visibleWidth}px`,
            margin: "0 auto",
            color: "#fff",
          }}
        >
          <button
            onClick={() => setIsMenuOpen(true)}
            style={{ fontSize: "24px", fontWeight: "bold", color: "#000", background: "none", border: "none", cursor: "pointer" }}
            disabled={!isMounted} // Disable during SSR
          >
            ≡
          </button>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "32px", fontWeight: "700", margin: "0", color: "#000" }}>
            Mother's Day Blog
          </h1>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
            disabled={!isMounted} // Disable during SSR
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        {isMounted && isMenuOpen && <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
        {isMounted && isSearchOpen && (
          <div
            style={{
              position: "absolute",
              top: "70px",
              right: margin,
              width: "300px",
              background: "#fff",
              padding: "16px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              zIndex: 3,
            }}
          >
            <input
              type="text"
              placeholder="Search Mother's Day articles..."
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "16px",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
              }}
            />
          </div>
        )}

        {/* Story Box */}
        {isMounted ? (
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: `calc(${margin} + 97px)`,
              width: "400px",
              padding: "40px",
              background: "#fff",
              borderBottom: "none",
              borderRadius: "8px 8px 0 0",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              zIndex: 2,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <button onClick={() => handleStoryChange(-1)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                ◄
              </button>
              <button onClick={() => handleStoryChange(1)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                ►
              </button>
            </div>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>
              {stories[storyIndex].category.toUpperCase()}
            </p>
            <h2
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: "700", color: "#1f2937", marginBottom: "16px" }}
            >
              {stories[storyIndex].title}
            </h2>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
              {stories[storyIndex].excerpt}
            </p>
            <Link
              href={`/articles/${stories[storyIndex].id}`}
              style={{
                display: "inline-block",
                padding: "8px 16px",
                background: "#000",
                color: "#fff",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "14px",
                textDecoration: "none",
                borderRadius: "4px",
              }}
            >
              READ MORE
            </Link>
          </div>
        ) : (
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: `calc(${margin} + 97px)`,
              width: "400px",
              padding: "40px",
              background: "#fff",
              borderBottom: "none",
              borderRadius: "8px 8px 0 0",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              zIndex: 2,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <button style={{ background: "none", border: "none", cursor: "pointer", visibility: "hidden" }}>◄</button>
              <button style={{ background: "none", border: "none", cursor: "pointer", visibility: "hidden" }}>►</button>
            </div>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>
              {stories[0].category.toUpperCase()}
            </p>
            <h2
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: "700", color: "#1f2937", marginBottom: "16px" }}
            >
              {stories[0].title}
            </h2>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
              {stories[0].excerpt}
            </p>
            <Link
              href="/articles/inspiring-moms"
              style={{
                display: "inline-block",
                padding: "8px 16px",
                background: "#000",
                color: "#fff",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "14px",
                textDecoration: "none",
                borderRadius: "4px",
              }}
            >
              READ MORE
            </Link>
          </div>
        )}
      </div>

      {/* Explore by Category Section */}
      <div style={{ padding: "24px 0", width: `${visibleWidth}px`, margin: "0 auto", background: "#fff" }}>
        <div
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", padding: `0 ${margin}` }}
        >
          <h3
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: "700", color: "#1f2937" }}
          >
            Explore by Category
          </h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={() => handleCategoryScroll(-1)}
              style={{ marginRight: "8px", background: "none", border: "none", cursor: "pointer" }}
              disabled={!isMounted}
            >
              ◄
            </button>
            <button
              onClick={() => handleCategoryScroll(1)}
              style={{ background: "none", border: "none", cursor: "pointer" }}
              disabled={!isMounted}
            >
              ►
            </button>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", padding: `0 ${margin}` }}>
          <div
            style={{
              display: "flex",
              width: `${(categories.length * 180) + ((categories.length - 1) * 16)}px`,
              transform: isMounted ? `translateX(-${categoryScroll}px)` : "translateX(0px)",
              transition: isMounted ? "transform 0.3s" : "none",
            }}
          >
            {categories.map((category, index) => (
              <Link href="/categories" key={category} style={{ flexShrink: 0, textDecoration: "none" }}>
                <div
                  style={{
                    width: "180px",
                    height: "180px",
                    background: "#000",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "16px",
                    fontWeight: "500",
                    marginRight: index < categories.length - 1 ? "16px" : "0",
                    cursor: "pointer",
                  }}
                >
                  {category.toUpperCase()}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Articles Section */}
      <div
        style={{ padding: "24px 0", width: `${visibleWidth}px`, margin: "0 auto", background: "#fff", display: "flex", justifyContent: "space-between" }}
      >
        {/* Left Side: Articles */}
        <div style={{ width: "calc(100% - 360px)", padding: `0 ${margin}` }}>
          <h3
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: "700", color: "#1f2937", marginBottom: "24px" }}
          >
            Recent Mother's Day Articles
          </h3>

          {/* Article 1 */}
          <div style={{ display: "flex", marginBottom: "40px" }}>
            <div
              style={{ width: "200px", height: "200px", background: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "24px" }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <div
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", background: "#d1d5db", opacity: 0.5 }}
                ></div>
                <svg
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                >
                  <path d="M3 3h18v18H3z"></path>
                  <path d="M3 3l18 18M3 21l18-18"></path>
                </svg>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "12px", color: "#6b7280", marginBottom: "8px" }}>#FAMILY BONDING • 8 minutes reading</p>
              <h4
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: "700", color: "#1f2937", marginBottom: "12px" }}
              >
                Planning a Special Mother’s Day Family Gathering
              </h4>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
                Bring the family together to celebrate Mom with heartfelt activities, shared meals, and memorable moments that show your love and appreciation.
              </p>
              <Link
                href="#"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "#000",
                  color: "#fff",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "14px",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                READ MORE
              </Link>
            </div>
          </div>

          {/* Article 2 */}
          <div style={{ display: "flex", marginBottom: "40px" }}>
            <div
              style={{ width: "200px", height: "200px", background: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "24px" }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <div
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", background: "#d1d5db", opacity: 0.5 }}
                ></div>
                <svg
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                >
                  <path d="M3 3h18v18H3z"></path>
                  <path d="M3 3l18 18M3 21l18-18"></path>
                </svg>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "12px", color: "#6b7280", marginBottom: "8px" }}>#GIFT IDEAS • 6 minutes reading</p>
              <h4
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: "700", color: "#1f2937", marginBottom: "12px" }}
              >
                Thoughtful Mother’s Day Gift Ideas
              </h4>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
                From personalized keepsakes to pampering spa days, discover the perfect gifts to make Mom feel special this Mother’s Day.
              </p>
              <Link
                href="#"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "#000",
                  color: "#fff",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "14px",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                READ MORE
              </Link>
            </div>
          </div>

          {/* Article 3 */}
          <div style={{ display: "flex", marginBottom: "40px" }}>
            <div
              style={{ width: "200px", height: "200px", background: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "24px" }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <div
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", background: "#d1d5db", opacity: 0.5 }}
                ></div>
                <svg
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                >
                  <path d="M3 3h18v18H3z"></path>
                  <path d="M3 3l18 18M3 21l18-18"></path>
                </svg>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "12px", color: "#6b7280", marginBottom: "8px" }}>#CELEBRATIONS • 10 minutes reading</p>
              <h4
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: "700", color: "#1f2937", marginBottom: "12px" }}
              >
                How to Plan a Memorable Mother’s Day Brunch
              </h4>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
                Create a beautiful Mother’s Day brunch with delicious recipes, stunning table settings, and heartfelt touches to honor the special women in your life.
              </p>
              <Link
                href="#"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "#000",
                  color: "#fff",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "14px",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                READ MORE
              </Link>
            </div>
          </div>

          {/* Article 4 */}
          <div style={{ display: "flex", marginBottom: "40px" }}>
            <div
              style={{ width: "200px", height: "200px", background: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "24px" }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <div
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", background: "#d1d5db", opacity: 0.5 }}
                ></div>
                <svg
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                >
                  <path d="M3 3h18v18H3z"></path>
                  <path d="M3 3l18 18M3 21l18-18"></path>
                </svg>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "12px", color: "#6b7280", marginBottom: "8px" }}>#INSPIRATION • 7 minutes reading</p>
              <h4
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: "700", color: "#1f2937", marginBottom: "12px" }}
              >
                Celebrating the Strength of Single Moms
              </h4>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
                Honor the incredible resilience and love of single mothers with stories that inspire and uplift this Mother’s Day.
              </p>
              <Link
                href="#"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "#000",
                  color: "#fff",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "14px",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                READ MORE
              </Link>
            </div>
          </div>

          {/* Article 5 */}
          <div style={{ display: "flex", marginBottom: "40px" }}>
            <div
              style={{ width: "200px", height: "200px", background: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "24px" }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <div
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", background: "#d1d5db", opacity: 0.5 }}
                ></div>
                <svg
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                >
                  <path d="M3 3h18v18H3z"></path>
                  <path d="M3 3l18 18M3 21l18-18"></path>
                </svg>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "12px", color: "#6b7280", marginBottom: "8px" }}>#HEALTH TIPS • 5 minutes reading</p>
              <h4
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: "700", color: "#1f2937", marginBottom: "12px" }}
              >
                Self-Care Tips for Busy Moms
              </h4>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
                Encourage Mom to take time for herself with these simple self-care practices that fit into a hectic schedule this Mother’s Day.
              </p>
              <Link
                href="#"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "#000",
                  color: "#fff",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "14px",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                READ MORE
              </Link>
            </div>
          </div>

          {/* Article 6 */}
          <div style={{ display: "flex", marginBottom: "40px" }}>
            <div
              style={{ width: "200px", height: "200px", background: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "24px" }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <div
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", background: "#d1d5db", opacity: 0.5 }}
                ></div>
                <svg
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                >
                  <path d="M3 3h18v18H3z"></path>
                  <path d="M3 3l18 18M3 21l18-18"></path>
                </svg>
              </div>
            </div>
            <div style={{ flex: "1" }}>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "12px", color: "#6b7280", marginBottom: "8px" }}>#MOTHER'S LOVE • 9 minutes reading</p>
              <h4
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: "700", color: "#1f2937", marginBottom: "12px" }}
              >
                The Unconditional Love of a Mother
              </h4>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
                Reflect on the profound bond between mothers and their children with stories that capture the essence of maternal love this Mother’s Day.
              </p>
              <Link
                href="#"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "#000",
                  color: "#fff",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "14px",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                READ MORE
              </Link>
            </div>
          </div>

          {/* Article 7 */}
          <div style={{ display: "flex", marginBottom: "40px" }}>
            <div
              style={{ width: "200px", height: "200px", background: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "24px" }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <div
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", background: "#d1d5db", opacity: 0.5 }}
                ></div>
                <svg
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                >
                  <path d="M3 3h18v18H3z"></path>
                  <path d="M3 3l18 18M3 21l18-18"></path>
                </svg>
              </div>
            </div>
            <div style={{ flex: "1" }}>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "12px", color: "#6b7280", marginBottom: "8px" }}>#CELEBRATIONS • 8 minutes reading</p>
              <h4
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: "700", color: "#1f2937", marginBottom: "12px" }}
              >
                Crafting Heartfelt Mother’s Day Cards
              </h4>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
                Learn how to create personalized Mother’s Day cards that express your gratitude and love in a meaningful way.
              </p>
              <Link
                href="#"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "#000",
                  color: "#fff",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "14px",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                READ MORE
              </Link>
            </div>
          </div>

          {/* Article 8 */}
          <div style={{ display: "flex" }}>
            <div
              style={{ width: "200px", height: "200px", background: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "24px" }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <div
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", background: "#d1d5db", opacity: 0.5 }}
                ></div>
                <svg
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                >
                  <path d="M3 3h18v18H3z"></path>
                  <path d="M3 3l18 18M3 21l18-18"></path>
                </svg>
              </div>
            </div>
            <div style={{ flex: "1" }}>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "12px", color: "#6b7280", marginBottom: "8px" }}>#INSPIRATION • 6 minutes reading</p>
              <h4
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: "700", color: "#1f2937", marginBottom: "12px" }}
              >
                Stories of Motherly Wisdom
              </h4>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
                Celebrate the lessons and wisdom passed down from mothers through generations with heartwarming stories for Mother’s Day.
              </p>
              <Link
                href="#"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "#000",
                  color: "#fff",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "14px",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Sidebar */}
        <div style={{ width: "300px", paddingRight: margin }}>
          {/* Profile Section */}
          <div style={{ border: "1px solid #e5e7eb", padding: "24px", marginBottom: "24px" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#e5e7eb",
                borderRadius: "50%",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v4M12 16h.01"></path>
              </svg>
            </div>
            <h5
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "18px", fontWeight: "700", color: "#1f2937", marginBottom: "8px" }}
            >
              Papeev Shrard
            </h5>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
              Honoring mothers has been my passion since I was young. From celebrating their love to sharing their stories, I believe every mom deserves to feel special on Mother’s Day.
            </p>
            <p
              style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", fontWeight: "700", color: "#1f2937", marginBottom: "16px" }}
            >
              Follow me for Mother’s Day ideas
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <a href="#" style={{ color: "#000" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" style={{ color: "#000" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" style={{ color: "#000" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Mother’s Day Themes Section */}
          <div style={{ border: "1px solid #e5e7eb", padding: "24px", marginBottom: "24px" }}>
            <h5
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "18px", fontWeight: "700", color: "#1f2937", marginBottom: "16px" }}
            >
              Mother’s Day Themes
            </h5>
            <Link
              href="#"
              style={{
                display: "block",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "14px",
                color: "#1f2937",
                marginBottom: "12px",
                textDecoration: "none",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "12px",
              }}
            >
              Love
            </Link>
            <Link
              href="#"
              style={{
                display: "block",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "14px",
                color: "#1f2937",
                marginBottom: "12px",
                textDecoration: "none",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "12px",
              }}
            >
              Gratitude
            </Link>
            <Link
              href="#"
              style={{
                display: "block",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "14px",
                color: "#1f2937",
                marginBottom: "12px",
                textDecoration: "none",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "12px",
              }}
            >
              Appreciation
            </Link>
            <Link
              href="#"
              style={{
                display: "block",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "14px",
                color: "#1f2937",
                marginBottom: "12px",
                textDecoration: "none",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "12px",
              }}
            >
              Family
            </Link>
            <Link
              href="#"
              style={{
                display: "block",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "14px",
                color: "#1f2937",
                marginBottom: "12px",
                textDecoration: "none",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "12px",
              }}
            >
              Care
            </Link>
            <Link
              href="#"
              style={{ display: "inline-block", fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#1f2937", textDecoration: "underline" }}
            >
              Read more
            </Link>
          </div>

          {/* Newsletter Section */}
          <div style={{ border: "1px solid #e5e7eb", padding: "24px" }}>
            <h5
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "18px", fontWeight: "700", color: "#1f2937", marginBottom: "16px" }}
            >
              Newsletter
            </h5>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280" }}>
              Subscribe to get the latest Mother’s Day tips and ideas.
            </p>
            <div style={{ marginTop: "16px" }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "14px",
                  marginBottom: "12px",
                }}
              />
              <button
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "#000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Section */}
      <div style={{ padding: "24px 0", width: `${visibleWidth}px`, margin: "0 auto", background: "#fff" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", padding: `0 ${margin}` }}>
          <button style={{ padding: "8px", background: "#fff", border: "1px solid #d1d5db", borderRadius: "4px", cursor: "pointer" }}>◄</button>
          <button style={{ padding: "8px 16px", background: "#fff", border: "1px solid #d1d5db", borderRadius: "4px", cursor: "pointer" }}>1</button>
          <button style={{ padding: "8px 16px", background: "#fff", border: "1px solid #d1d5db", borderRadius: "4px", cursor: "pointer" }}>2</button>
          <button style={{ padding: "8px 16px", background: "#fff", border: "1px solid #d1d5db", borderRadius: "4px", cursor: "pointer" }}>3</button>
          <span style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280" }}>...</span>
          <button style={{ padding: "8px 16px", background: "#fff", border: "1px solid #d1d5db", borderRadius: "4px", cursor: "pointer" }}>10</button>
          <button style={{ padding: "8px", background: "#fff", border: "1px solid #d1d5db", borderRadius: "4px", cursor: "pointer" }}>►</button>
        </div>
      </div>

      {/* Footer Section */}
      <div style={{ background: "#fff", padding: "40px 0", width: "100%", borderTop: "1px solid #e5e7eb" }}>
        <div style={{ width: `${visibleWidth}px`, margin: "0 auto", padding: `0 ${margin}` }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#4b5563",
                marginRight: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M3 3h18v18H3z"></path>
                <path d="M3 3l18 18M3 21l18-18"></path>
              </svg>
            </div>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280" }}>
              Follow me on Instagram
              <a href="#" style={{ display: "block", color: "#3b82f6", textDecoration: "none" }}>
                @mothersdaylove
              </a>
            </p>
          </div>
          <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
            {Array(5)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "120px",
                    height: "120px",
                    background: "#e5e7eb",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                    <path d="M3 3h18v18H3z"></path>
                    <path d="M3 3l18 18M3 21l18-18"></path>
                  </svg>
                </div>
              ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280" }}>Mother's Day Blog</p>
            <div style={{ display: "flex", gap: "16px" }}>
              <Link href="/" style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>
                Home
              </Link>
              <Link href="/about" style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>
                About
              </Link>
              <Link href="/categories" style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>
                Categories
              </Link>
              <Link href="/contact" style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}