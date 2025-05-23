import { getPosts } from '@/app/lib/posts';
import Link from 'next/link';
import Pagination from '../components/pagination';
import H1 from '../components/H1';


export default async function BlogPostsPage({ searchParams }) {
  const tags = searchParams?.tags?.split(",") || [];
  const order = searchParams?.order ?? "newest";
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 3;

  const { posts, pageCount, total } = await getPosts({ 
    tags,
    newest: order === "newest",
    page,
    limit
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Recent Posts</h1>
        <H1> </H1>
        <div className="flex gap-4">
          <Link 
            href={`/blog?order=${order === "newest" ? "oldest" : "newest"}`}
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {order === "newest" ? "Show Oldest First" : "Show Newest First"}
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(posts) && posts.length > 0 ? (          posts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-4 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
              {post.tags && (
                <div className="mt-2 flex gap-2 flex-wrap">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">No blog posts found.</p>
        )}
      </div>
      
      {pageCount > 1 && (
        <div className="mt-8">
          <Pagination pageCount={pageCount} />
        </div>
      )}
    </div>
  );
}