import type { Signal } from "@preact/signals";

interface NavbarProps {
  menuStatus: Signal<boolean>;
}

export default function Navbar(props: NavbarProps) {
  return (
    <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Leo Zhang</h1>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
          <button 
            className="md:hidden"
            onClick={() => props.menuStatus.value = !props.menuStatus.value}
          >
            Menu
          </button>
        </nav>
        {props.menuStatus.value && (
          <div className="md:hidden">
            <a href="#about" className="block py-2 px-4 hover:bg-gray-200">About</a>
            <a href="#projects" className="block py-2 px-4 hover:bg-gray-200">Projects</a>
            <a href="#experience" className="block py-2 px-4 hover:bg-gray-200">Experience</a>
            <a href="#contact" className="block py-2 px-4 hover:bg-gray-200">Contact</a>
          </div>
        )}
      </header>
  );
}
