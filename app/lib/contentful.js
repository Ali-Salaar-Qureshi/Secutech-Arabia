
import { createClient } from 'contentful';

// Create the Contentful client using environment variables
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// Fetch all blog posts, sorted by date (newest first)
export async function fetchBlogPosts() {
  const entries = await client.getEntries({
    content_type: 'blogPost', // Use the ID of your content type (check Contentful dashboard)
    order: '-fields.date',    // Sort by date descending
  });

  // Map the entries to a simpler structure for your app
  return entries.items.map(item => ({
    id: item.sys.id,
    title: item.fields.title,
    slug: item.fields.slug,
    date: item.fields.date,
    thumbnail: item.fields.thumbnail?.fields?.file?.url || '',
    content: item.fields.content, // If rich text, you may need to render it specially
  }));
}

