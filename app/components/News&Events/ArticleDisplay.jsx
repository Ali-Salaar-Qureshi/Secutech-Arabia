export default function ArticleDisplay({ article }) {
  if (!article) return <p className="text-gray-500">Select an article to read.</p>;

  return (
    <article className="prose max-w-none">
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{article.date}</p>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}
