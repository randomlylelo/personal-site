// routes/blog/[slug].tsx
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { CSS, render } from "@deno/gfm";
import { extract } from "$std/front_matter/yaml.ts";
import { SectionHeaderTwoLevels } from "@components/SectionHeader.tsx";

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
        date: attrs.date.toISOString().split("T")[0] || new Date().toISOString().split("T")[0],
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
  if (!post) {
    return (
        <main class="mx-auto px-4 py-2 max-w-4xl">
          <h1 class="text-4xl font-bold mb-4">Post Not Found</h1>
          <p>Sorry, the requested blog post could not be found.</p>
          <div class="mt-8">
            <a href="/blog" class="text-primary hover:underline">
              ← Back to Blog
            </a>
          </div>
        </main>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} - Leo Zhang's Blog</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <link rel="stylesheet" href="/markdown-styles.css" />
      </Head>
      <main class="mx-auto px-4 py-2 max-w-4xl">
        <article class="mt-20">
          <SectionHeaderTwoLevels text="Blog" href="/blog" text2={post.title} href2={`/blog/${post.slug}`}/>
          <time class="text-sm text-gray-500 mb-6 block">{post.date}</time>
          <div
            class="markdown-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        <div class="mt-8">
          <a href="/blog" class="text-primary hover:underline">
            ← Back to Blog
          </a>
        </div>
      </main>
    </>
  );
}
