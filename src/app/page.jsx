"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import articles from "@/data/articles.json";

// Dynamically import Swiper with SSR disabled
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(() => import("swiper/react").then((mod) => mod.SwiperSlide), {
  ssr: false,
});

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Stories", "Health", "Inspiration"];
  const filteredArticles = articles.filter(
    (article) =>
      (selectedCategory === "All" || article.category === selectedCategory) &&
      (searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-7xl">
      {/* Hero Section with Carousel */}
      <Swiper spaceBetween={30} slidesPerView={1} navigation modules={[require("swiper/modules").Navigation]}>
        {articles.slice(0, 3).map((article) => (
          <SwiperSlide key={article.id}>
            <div className="relative">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-80 sm:h-96 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 p-4 sm:p-6 bg-black bg-opacity-60 text-white w-full rounded-b-lg">
                <h2 className="text-xl sm:text-2xl font-bold">{article.title}</h2>
                <p className="text-sm sm:text-base">{article.excerpt}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Search Bar */}
      <div className="relative my-6">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Section */}
      <div className="my-6">
        <h3 className="text-xl sm:text-2xl font-bold">Explore by Category</h3>
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm sm:text-base transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800 hover:bg-blue-100 hover:text-blue-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Articles and Sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Recent Articles</h3>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col sm:flex-row gap-4 mb-6 p-4 border rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full sm:w-32 h-32 object-cover rounded"
                />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold">{article.title}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{article.excerpt}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {article.readingTime} • {article.category}
                  </p>
                  <a
                    href={`/articles/${article.id}`}
                    className="text-blue-500 hover:underline text-sm sm:text-base"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No articles found.</p>
          )}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-bold">Author Profile</h3>
            <p className="text-sm text-gray-600">Jane Doe, passionate writer.</p>
          </div>
          <div className="p-4 border rounded-lg mt-4">
            <h3 className="text-lg font-bold">Highlights</h3>
            <p className="text-sm text-gray-600">Amazing stories from moms worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}