import articles from "@/data/articles.json";

export default function ArticlePage({ params }) {
  const article = articles.find((a) => a.id === parseInt(params.id));

  if (!article) {
    return <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">Article not found</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-64 sm:h-96 object-cover rounded-lg"
      />
      <h1 className="text-2xl sm:text-3xl font-bold my-4 sm:my-6">{article.title}</h1>
      <p className="text-sm sm:text-base text-gray-500 mb-4">
        By {article.author} • {article.date} • {article.readingTime} • {article.category}
      </p>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{article.content}</p>
    </div>
  );
}