// routes/blog/[slug].tsx
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Navbar from "@islands/Navbar.tsx";
import { CSS, render } from "@deno/gfm";
import { extract } from "$std/front_matter/yaml.ts";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export const handler: Handlers<BlogPost> = {
  async GET(req, ctx) {
    const slug = ctx.params.slug;
    const filePath = `./blog/${slug}.md`;

    try {
      const rawContent = await Deno.readTextFile(filePath);
      const { attrs, body } = extract(rawContent);
      
      const post: BlogPost = {
        slug,
        title: attrs.title || "Untitled Post",
        date: attrs.date || new Date().toISOString().split('T')[0],
        content: render(body),
      };

      return ctx.render(post);
    } catch (error) {
      if (error instanceof Deno.errors.NotFound) {
        return ctx.render(null);
      }
      throw error;
    }
  },
};

export default function BlogPost({ data: post }: PageProps<BlogPost | null>) {
  const menuStatus = useSignal(false);

  if (!post) {
    return (
      <div class="min-h-screen bg-gray-100 text-gray-900">
        <Navbar menuStatus={menuStatus} />
        <main class="mx-auto px-4 py-2 max-w-4xl">
          <h1 class="text-4xl font-bold mb-4">Post Not Found</h1>
          <p>Sorry, the requested blog post could not be found.</p>
          <div class="mt-8">
            <a href="/blog" class="text-primary hover:underline">← Back to Blog</a>
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} - Leo Zhang's Blog</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
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