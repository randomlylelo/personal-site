import { FunctionalComponent } from "preact";

interface CardHeaderProps {
  text: string;
}

const CardHeader: FunctionalComponent<CardHeaderProps> = ({ text }) => {
  return (
    <div class="flex items-center text-lg font-mono mb-2">
      <span class="text-secondary mr-1">$</span>
      <span class="text-secondary">cd</span>
      <span class="text-primary ml-2">{text}</span>
    </div>
  );
};

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
}

const ProjectCard: FunctionalComponent<ProjectCardProps> = ({ href, title, description }) => {
  return (
    <a
      href={href}
      class="block bg-white p-6 rounded-lg shadow transition transform hover:shadow-lg hover:scale-105"
    >
      <CardHeader text={title} />
      <p class="mb-4">{description}</p>
    </a>
  );
};

export default ProjectCard;