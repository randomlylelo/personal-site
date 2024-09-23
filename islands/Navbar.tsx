// islands/Navbar.tsx
import { Signal } from "@preact/signals";
import { Menu } from "lucide";

interface NavbarProps {
  menuStatus: Signal<boolean>;
}

export default function Navbar({ menuStatus }: NavbarProps) {
  return (
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-indigo-600">LZ</h1>
        <div class="hidden md:flex space-x-4">
          {["About", "Projects", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              class="hover:text-indigo-600"
            >
              {item}
            </a>
          ))}
        </div>
        <button
          class="md:hidden"
          aria-expanded={menuStatus.value}
          aria-controls="mobile-menu"
          onClick={() => (menuStatus.value = !menuStatus.value)}
        >
          <Menu size={24} />
        </button>
      </nav>
      {menuStatus.value && (
        <ul
          id="mobile-menu"
          class="md:hidden bg-white shadow transition-all duration-300"
        >
          {["About", "Projects", "Experience", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                class="block py-2 px-4 hover:bg-gray-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
