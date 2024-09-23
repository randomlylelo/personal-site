import { Handlers, PageProps } from "$fresh/server.ts";
import { render } from "@deno/gfm";

export const handler: Handlers = {
  async GET(req, ctx) {
    const slug = ctx.params.slug;
    // const markdown = await Deno.readTextFile(`./content/${slug}.md`);
    const markdown = `
# Hello, world!

| Type | Value |
| ---- | ----- |
| x    | 42    |

\`\`\`js
console.log("Hello, world!");
\`\`\`
`;
    const content = render(markdown);
    return ctx.render({ content });
  },
};

export default function BlogPost({ data }: PageProps) {
  return (
    <div data-color-mode="light" data-light-theme="light" class="p-4 markdown-body">
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  );
}