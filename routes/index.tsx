// routes/index.tsx
import { Head } from "$fresh/runtime.ts";
import SectionHeader from "@components/SectionHeader.tsx";
import { Github, Linkedin, Mail, Twitter } from "lucide";
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
          date: attrs.date.toISOString().split("T")[0] ||
            new Date().toISOString().split("T")[0],
          excerpt: attrs.excerpt || excerpt.slice(0, 150) + "...",
        });
      }
    }

    // Sort posts by date, most recent first
    posts.sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Return only the 5 most recent posts
    return ctx.render(posts.slice(0, 5));
  },
};

export default function Home({ data: recentPosts }: PageProps<BlogPost[]>) {
  return (
    <>
      <Head>
        <title>Leo Zhang</title>
      </Head>

      <main class="mx-auto px-4 py-2 max-w-4xl">
        <section id="hero" class="text-center pt-20">
          <h1 class="text-6xl font-bold mb-4">Hi, I'm Leo Zhang</h1>
          <p class="text-xl mb-8">
            A fullstack software engineer and student passionate about robotics, systems, and more.
          </p>
          <div class="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/randomlylelo"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-primary"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/leozhang3"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-primary"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/randomlylelo"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-primary"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:lzhang3@caltech.edu"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-primary"
            >
              <Mail size={24} />
            </a>
          </div>
        </section>

        <div id="projects" />
        <section class="pt-20">
          <SectionHeader text="Projects" href="#projects" />
          <div class="grid md:grid-cols-2 gap-6">
            <ProjectCard
              href="https://github.com/aerorobotics/ros2basilisk"
              title="ros2basilisk"
              description="Open-source wrapper to provide a ROS2-interface for Basilisk. To do spacecraft simulations in ROS2."
            />
            <ProjectCard
              href="https://github.com/randomlylelo/dotfiles"
              title="dotfiles"
              description="Personal dotfiles for my local computer setup. Includes configurations for zsh and wallpapers."
            />
          </div>
        </section>

        <div id="me" />
        <section class="pt-20">
          <SectionHeader text="Me" href="#me" />
          <p class="text-xl">
            I am currently a student at Caltech studying Computer Science. I
            currently live in California. I am interested in anything computer
            related. I like to tinker with hardware and software. You can find
            some of my work on my{" "}
            <a href="https://github.com/randomlylelo" class="underline">
              Github
            </a>.
          </p>
        </section>

        <div id="blog" />
        <section class="pt-20">
          <SectionHeader text="Blog" href="/blog" />
          <div class="space-y-8">
            {recentPosts.map((post) => (
              <ProjectCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                title={post.title}
                description={`${post.date} | ${post.excerpt}`}
              />
            ))}
          </div>
          {recentPosts.length > 0 && (
            <div class="mt-8">
              <a href="/blog" class="text-primary text-lg relative group">
                See all posts →
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full">
                </span>
              </a>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
