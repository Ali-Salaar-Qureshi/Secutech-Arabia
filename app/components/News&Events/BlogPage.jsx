"use client";
import { useEffect, useState } from "react";
import { fetchBlogPosts } from "../../lib/contentful";
import Sidebar from "./Sidebar";
import ArticleDisplay from "./ArticleDisplay";

export default function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts().then((data) => {
      setArticles(data);
      setSelectedArticle(data[0] || null);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full px-[100px] py-8 flex flex-col md:flex-row items-start gap-6">
      <div className="flex-1 min-w-0">
        {/* Breadcrumb */}
        <div className="mb-4">
          <p className="text-sm text-[#5C5C5C]">
            <span>Home &gt; </span>
            <span className="text-[#092C4C] font-semibold">News & Events</span>
          </p>
        </div>
        <ArticleDisplay article={selectedArticle} />
      </div>
      <Sidebar allArticles={articles} onSelect={setSelectedArticle} />
    </div>
  );
}