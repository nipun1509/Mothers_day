"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Menu({ isOpen, onClose }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent rendering on server side

  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#000",
            color: "#fff",
            zIndex: 1000,
            padding: "0 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center horizontally
            justifyContent: "center", // Center vertically
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "0",
              left: "40px",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "24px",
              lineHeight: "24px",
              padding: "0",
              margin: "0",
              cursor: "pointer",
            }}
          >
            ×
          </button>

          {/* Title */}
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#fff",
              margin: "20px 0 40px",
              textAlign: "center",
            }}
          >
            Mothers Day Blog
          </h1>

          {/* Navigation Links */}
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center links horizontally
            }}
          >
            <Link
              href="/"
              style={{
                display: "block",
                fontSize: "18px",
                color: "#fff",
                textDecoration: "none",
                marginBottom: "20px",
                fontWeight: "700",
              }}
            >
              − Home
            </Link>
            <Link
              href="/about"
              style={{
                display: "block",
                fontSize: "18px",
                color: "#fff",
                textDecoration: "none",
                marginBottom: "20px",
                fontWeight: "700",
              }}
            >
              About me
            </Link>
            <Link
              href="/categories"
              style={{
                display: "block",
                fontSize: "18px",
                color: "#fff",
                textDecoration: "none",
                marginBottom: "20px",
                fontWeight: "700",
              }}
            >
              When Is The Best Time of Year To Visit Japan
            </Link>
            <Link
              href="/contact"
              style={{
                display: "block",
                fontSize: "18px",
                color: "#fff",
                textDecoration: "none",
                marginBottom: "20px",
                fontWeight: "700",
              }}
            >
              Contact
            </Link>
          </nav>

          {/* Newsletter Section */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              right: "40px",
              background: "#fff",
              color: "#000",
              padding: "20px",
              border: "1px solid #ccc",
              width: "300px",
              borderRadius: "0",
            }}
          >
            <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "10px", color: "#000" }}>Newsletter</h3>
            <p style={{ fontSize: "14px", marginBottom: "20px", color: "#000", lineHeight: "1.5" }}>
              Subscribe to receive exclusive content updates, Mother’s Day ideas & tips!
            </p>
            <input
              type="email"
              placeholder="email address"
              style={{
                width: "100%",
                padding: "8px 0",
                marginBottom: "10px",
                border: "none",
                borderBottom: "1px solid #000",
                fontSize: "14px",
                color: "#000",
                outline: "none",
                background: "transparent",
              }}
            />
            <button
              style={{
                width: "100%",
                padding: "8px",
                background: "#fff",
                color: "#000",
                border: "1px solid #000",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
    </>
  );
}