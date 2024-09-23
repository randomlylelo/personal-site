import { FunctionalComponent } from 'preact';
import { Folder } from 'lucide'; // Adjust based on your icon setup

interface SectionHeaderProps {
  text: string;
  href: string;
}

const SectionHeader: FunctionalComponent<SectionHeaderProps> = ({ text, href }) => {
  return (
    <header class="flex items-center text-4xl font-bold mb-8">
      <span class="text-secondary mr-2">~/</span>
      <a href={href} class="flex items-center text-primary hover:underline">
        <Folder size={24} class="mr-2 mt-1" />
        {text}
      </a>
      <span class="text-secondary mx-2">/</span>
    </header>
  );
};

export default SectionHeader;
