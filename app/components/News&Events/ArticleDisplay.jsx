import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function ArticleDisplay({ article }) {
  if (!article) return <p className="text-gray-500">Select an article to read.</p>;

  return (
    <article className="prose lg:prose-xl max-w-[900px] mx-auto bg-transparent px-0 md:px-2 rounded-none shadow-none">
      {article.thumbnail && (
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-[276px] md:h-[320px] object-cover rounded mb-4"
        />
      )}
      <h1 className="text-3xl font-bold text-[#092C4C] mb-1 mt-2">{article.title}</h1>
      <p className="text-sm text-[#5C5C5C] mb-4">{article.date}</p>
      <div className="mt-2">{documentToReactComponents(article.content)}</div>
    </article>
  );
}
