// routes/blog/index.tsx
import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Navbar from "@islands/Navbar.tsx";
import SectionHeader from "@components/SectionHeader.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { extract } from "$std/front_matter/yaml.ts";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export const handler: Handlers<BlogPost[]> = {
  async GET(_, ctx) {
    const posts: BlogPost[] = [];
    
    for await (const dirEntry of Deno.readDir("./blog")) {
      if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
        const content = await Deno.readTextFile(`./blog/${dirEntry.name}`);
        const { attrs, body } = extract(content);
        
        const slug = dirEntry.name.replace(".md", "");
        const excerpt = body.split("\n").find(line => line.trim() !== "") || "";
        
        posts.push({
          slug,
          title: attrs.title || "Untitled Post",
          date: attrs.date || new Date().toISOString().split('T')[0],
          excerpt: attrs.excerpt || excerpt.slice(0, 150) + "...",
        });
      }
    }
    
    // Sort posts by date, most recent first
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return ctx.render(posts);
  },
};

export default function BlogIndex({ data: posts }: PageProps<BlogPost[]>) {
  const menuStatus = useSignal(false);
  
  return (
    <>
      <Head>
        <title>Leo Zhang - Blog</title>
      </Head>
      <div class="min-h-screen bg-gray-100 text-gray-900">
        <Navbar menuStatus={menuStatus} />
        <main class="mx-auto px-4 py-2 max-w-4xl">
          <section id="blog" class="pt-20">
            <SectionHeader text="Blog" href="#blog" />
            <div class="space-y-8">
              {posts.map((post) => (
                <article key={post.slug} class="bg-white shadow-md rounded-lg p-6">
                  <h2 class="text-2xl font-bold mb-2">
                    <a href={`/blog/${post.slug}`} class="hover:text-primary">
                      {post.title}
                    </a>
                  </h2>
                  <time class="text-sm text-gray-500 mb-3 block">{post.date}</time>
                  <p class="text-gray-700">{post.excerpt}</p>
                  <a href={`/blog/${post.slug}`} class="inline-block mt-4 text-primary hover:underline">
                    Read more →
                  </a>
                </article>
              ))}
            </div>
          </section>
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