import fs from 'fs';
import path from 'path';
import {compileMDX} from 'next-mdx-remote/rsc';

export function loadPost(slug) {
    try {
        const contentDir = path.join(process.cwd(), 'src', 'app', 'content');
        const filePath = path.join(contentDir, `${slug}.mdx`);
        console.log('Trying to load file from:', filePath);
        
        if (fs.existsSync(filePath)) {
            return fs.readFileSync(filePath, 'utf-8');
        }
        
        throw new Error(`MDX file for slug "${slug}" not found`);
    } catch (error) {
        console.error('Error loading post:', error);
        throw error;
    }
}

export async function getPost(slug) {
    const source = loadPost(slug);
    
    const { content, frontmatter } = await compileMDX({
        source,
        options: {
            parseFrontmatter: true,
        },
    });
    
    return {
        content,
        frontmatter
    };
}

export async function getPosts({ newest = true, page = 1, limit = 3, tags = [] } = {}) {
    try {
        const files = fs.readdirSync(
            path.join(process.cwd(), "src", "app", "content")
        );

        const posts = await Promise.all(
            files.map(async (filename) => {
                const slug = filename.replace(".mdx", "");
                try {
                    const post = await getPost(slug);
                    return {
                        slug,
                        ...post.frontmatter
                    };
                } catch (error) {
                    console.error(`Error loading post ${slug}:`, error);
                    return null;
                }
            })
        );

        let filteredPosts = posts.filter(Boolean); // Remove any failed posts

        if (tags?.length > 0) {
            filteredPosts = filteredPosts.filter((post) => {
                return post.tags?.some((tag) => tags.includes(tag));
            });
        }

        if (newest) {
            filteredPosts.sort((a, b) => {
                return new Date(b.date || '0') - new Date(a.date || '0');
            });
        }

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

        return {
            posts: paginatedPosts,
            pageCount: Math.ceil(filteredPosts.length / limit),
            total: filteredPosts.length
        };
    } catch (error) {
        console.error('Error in getPosts:', error);
        return {
            posts: [],
            pageCount: 0,
            total: 0
        };
    }
}