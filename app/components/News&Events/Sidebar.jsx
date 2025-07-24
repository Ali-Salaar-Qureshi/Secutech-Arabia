import { FiSearch } from "react-icons/fi";
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
    <aside className="w-full md:w-[363px] flex-shrink-0 space-y-6 mt-10">
      {/* Search Bar */}
      <div className="relative w-full">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#092C4C] w-4 h-4" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-9 pr-2 py-1.5 text-sm border border-[#a2a2a2] rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <h4 className="normal-text-bold text-[#092C4C]">Recent Posts</h4>
      <div className="space-y-2">
        {currentArticles.map((article) => (
          <div
            key={article.id}
            className="flex items-start gap-3 cursor-pointer hover:text-blue-600 transition"
            onClick={() => onSelect(article)}
          >
            <img src={article.thumbnail} alt={article.title} className="w-16 h-16 object-cover rounded" />
            <div className="text-sm">
              <p className="normal-text-bold text-[#092C4C] line-clamp-2">{article.title}</p>
              <p className="text-xs text-gray-400">{article.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 justify-center text-sm pt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="h-[32px] w-[32px] flex items-center justify-center border border-[#DADADA] rounded-[8px] text-[#092C4C] disabled:text-gray-300"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`h-[32px] w-[32px] flex items-center justify-center border border-[#DADADA] rounded-[8px] small-text-bold ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'text-[#092C4C]'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="h-[32px] w-[32px] flex items-center justify-center border border-[#DADADA] rounded-[8px] text-[#092C4C] disabled:text-gray-300"
        >
          &gt;
        </button>
      </div>
    </aside>
  );
}
