// routes/blog/index.tsx
import { Head } from "$fresh/runtime.ts";
import SectionHeader from "@components/SectionHeader.tsx";
import ProjectCard from "@components/ProjectCard.tsx";
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
        const excerpt = body.split("\n").find((line) => line.trim() !== "") ||
          "";

        posts.push({
          slug,
          title: attrs.title || "Untitled Post",
          date: attrs.date || new Date().toISOString().split("T")[0],
          excerpt: attrs.excerpt || excerpt.slice(0, 150) + "...",
        });
      }
    }

    // Sort posts by date, most recent first
    posts.sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return ctx.render(posts);
  },
};

export default function BlogIndex({ data: posts }: PageProps<BlogPost[]>) {
  return (
    <>
      <Head>
        <title>Leo Zhang - Blog</title>
      </Head>
      <main class="mx-auto px-4 py-2 max-w-4xl">
        <section id="blog" class="pt-20">
          <SectionHeader text="Blog" href="#blog" />
          <div class="space-y-8">
            {posts.map((post) => (
              <ProjectCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                title={post.title}
                description={`${post.date} - ${post.excerpt}`}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
