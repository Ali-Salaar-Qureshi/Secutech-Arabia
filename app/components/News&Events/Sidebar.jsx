import { useState, useMemo } from 'react';

export default function Sidebar({ allArticles, onSelect }) {
  const articlesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter articles
  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allArticles]);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <aside className="space-y-4 w-[363px]">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
      />

      <h2 className="text-lg font-semibold mt-4">Recent Posts</h2>
      <ul className="space-y-8">
        {currentArticles.map((article) => (
          <li
            key={article.id}
            className="flex gap-4 cursor-pointer hover:text-blue-600 transition"
            onClick={() => onSelect(article)}
          >
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-18 h-18 object-cover rounded-md"
            />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">{article.title}</div>
              <div className="text-xs text-gray-400">{article.date}</div>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex gap-2 justify-center text-sm pt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded disabled:text-gray-300"
        >
          ‹
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-2 py-1 rounded ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'text-blue-500'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-2 py-1 rounded disabled:text-gray-300"
        >
          ›
        </button>
      </div>
    </aside>
  );
}
