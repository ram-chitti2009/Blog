import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost } from "@/app/lib/posts";
import Link from 'next/link';

export async function generateMetadata({ params }) {
  try {
    const post = await getPost(params.slug);
    return {
      title: post?.frontmatter?.title || `Blog Post: ${params.slug}`,
      description: post?.frontmatter?.description || `This is the blog post with slug: ${params.slug}`,
    };
  } catch (error) {
    console.error('Metadata error:', error);
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found',
    };
  }
}

export default async function BlogPost({ params }) {
  try {
    const post = await getPost(params.slug);
    
    if (!post) {
      notFound();
    }

    return (
      <article className="prose lg:prose-xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{post.frontmatter.title}</h1>
        <p className="text-gray-600 mb-4">{post.frontmatter.description}</p>
        <div className="mb-4">
          {post.frontmatter.tags && post.frontmatter.tags.map(tag => (
            <Link href = {`/blog/?tags=${tag}`} key={tag} className="px-2 py-1 bg-gray-100 rounded text-sm mr-2">
              {tag}
            </Link>
          ))}
        </div>        <div className="mt-8 prose-headings:mt-8 prose-p:mt-4">
          {post.content}
        </div>
      </article>
    );
  } catch (error) {
    console.error('Error rendering post:', error);
    notFound();
  }
}