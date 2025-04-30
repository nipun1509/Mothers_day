"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

      {/* Contact Section */}
      <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1, marginRight: "20px" }}>
          {isMounted ? (
            <div style={{ position: "relative", width: "100%", height: "300px" }}>
              <Image
                src="/images/contact-placeholder.png"
                alt="Contact Image"
                fill
                style={{ objectFit: "cover", opacity: 0.5 }}
                priority
              />
              <svg style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <path d="M3 3h18v18H3z"></path>
                <path d="M3 3l18 18M3 21l18-18"></path>
              </svg>
            </div>
          ) : (
            <div style={{ width: "100%", height: "300px", background: "#e5e7eb", position: "relative" }}>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", background: "#d1d5db", opacity: 0.5 }}></div>
              <svg style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <path d="M3 3h18v18H3z"></path>
                <path d="M3 3l18 18M3 21l18-18"></path>
              </svg>
            </div>
          )}
          <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#000", marginBottom: "20px" }}>Contact</h2>
          <form>
            <input type="text" placeholder="Your Name" style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            <input type="email" placeholder="Your Email" style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            <input type="text" placeholder="Subject" style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            <textarea placeholder="Your Message" style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #d1d5db", borderRadius: "4px", height: "100px" }}></textarea>
            <button type="submit" style={{ padding: "10px 20px", background: "#000", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>Send</button>
          </form>
        </div>
      </div>

      {/* Instagram Section */}
      <div style={{ background: "#e5e7eb", padding: "20px 0", marginTop: "40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <div style={{ position: "absolute", top: "-40px", left: "24px", background: "#000", color: "#fff", padding: "10px 20px", borderRadius: "4px", display: "flex", alignItems: "center" }}>
            <span>Follow me on Instagram</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: "10px" }}>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.325 3.608 1.3.975.975 1.238 2.242 1.3 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.325 2.633-1.3 3.608-.975.975-2.242 1.238-3.608 1.3-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.325-3.608-1.3-.975-.975-1.238-2.242-1.3-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.325-2.633 1.3-3.608.975-.975 2.242-1.238 3.608-1.3 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.014-4.947.072-1.325.064-2.562.28-3.504.722-1.07.5-1.977 1.408-2.477 2.478-.442.942-.658 2.18-.722 3.504-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.064 1.325.28 2.562.722 3.504.5 1.07 1.408 1.977 2.478 2.477.942.442 2.18.658 3.504.722 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.325-.064 2.562-.28 3.504-.722 1.07-.5 1.977-1.408 2.477-2.478.442-.942.658-2.18.722-3.504.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.064-1.325-.28-2.562-.722-3.504-.5-1.07-1.408-1.977-2.478-2.477-.942-.442-2.18-.658-3.504-.722-1.277-.058-1.688-.072-4.947-.072z"></path>
              <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </div>
          <div style={{ display: "flex", gap: "20px", overflowX: "auto", paddingTop: "20px" }}>
            {Array(5).fill().map((_, index) => (
              <div key={index} style={{ width: "200px", height: "200px", background: "#d1d5db", position: "relative", flexShrink: 0 }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", background: "#e5e7eb", opacity: 0.5 }}></div>
                <svg style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                  <path d="M3 3h18v18H3z"></path>
                  <path d="M3 3l18 18M3 21l18-18"></path>
                </svg>
                {index === 2 && (
                  <div style={{ position: "absolute", bottom: "10px", left: "10px", color: "#fff", background: "rgba(0, 0, 0, 0.5)", padding: "5px 10px", borderRadius: "4px" }}>
                    <span>❤️ 1,231</span> <span>💬 543</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#fff", padding: "40px 0", width: "100%", borderTop: "1px solid #e5e7eb", marginTop: "40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "14px", color: "#6b7280" }}>Mothers Day Blog <span style={{ marginLeft: "10px" }}>© 2025. All Rights Reserved.</span></p>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href="/Home" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>Home</a>
            <a href="/about" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>About</a>
            <a href="/categories" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>Categories</a>
            <a href="/contact" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}