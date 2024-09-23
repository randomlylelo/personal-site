// routes/blog/[slug].tsx
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Navbar from "@islands/Navbar.tsx";
import { CSS, render } from "@deno/gfm";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export const handler: Handlers<BlogPost> = {
  async GET(req, ctx) {
    const slug = ctx.params.slug;
    // In a real application, you would fetch this data from your content directory
    // or a database. For now, we'll use mock data.
    const post: BlogPost = {
      slug,
      title: "Sample Blog Post",
      date: "2024-09-23",
      content: `
# Sample Blog Post

This is a sample blog post content. You can write your content in Markdown format here.

## Subheading

- List item 1
- List item 2
- List item 3

[Link to another page](https://example.com)

![Image description](https://via.placeholder.com/150)

\`\`\`python
def hello_world():
    print("Hello, world!")
\`\`\`
      `,
    };

    const renderedContent = render(post.content);

    return ctx.render({ ...post, content: renderedContent });
  },
};

export default function BlogPost({ data: post }: PageProps<BlogPost>) {
  const menuStatus = useSignal(false);

  return (
    <>
      <Head>
        <title>{post.title} - Leo Zhang's Blog</title>
        <style>
          ${CSS}
        </style>
        <link rel="stylesheet" href="/markdown-styles.css" />
      </Head>
      <div class="min-h-screen bg-gray-100 text-gray-900">
        <Navbar menuStatus={menuStatus} />
        <main class="mx-auto px-4 py-2 max-w-4xl">
          <article class="p-8 mt-20">
            <h1 class="text-4xl font-bold mb-4">{post.title}</h1>
            <time class="text-sm text-gray-500 mb-6 block">{post.date}</time>
            <div 
              class="markdown-content"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </article>
          <div class="mt-8">
            <a href="/blog" class="text-primary hover:underline">← Back to Blog</a>
          </div>
        </main>
        <footer>
          <div class="mx-auto px-4 py-4 text-center">
            <p>&copy; {new Date().getFullYear()} Leo Zhang. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
