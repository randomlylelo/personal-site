// islands/Navbar.tsx
import { Signal } from "@preact/signals";
import { Menu } from "lucide";

interface NavbarProps {
  menuStatus: Signal<boolean>;
}

export default function Navbar({ menuStatus }: NavbarProps) {
  const navItems = [
    { name: "Projects", href: "/#projects" },
    { name: "About Me", href: "/#me" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header class="bg-white shadow-sm sticky top-0 z-10">
      <nav class="container mx-auto px-4 py-3 flex justify-between items-center max-w-4xl">
        <a href="/" class="flex items-center">
          <img src="/leo_icon.png" alt="Logo" class="h-8 w-8" />
        </a>
        <div class="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              class="hover:text-indigo-600"
            >
              {item.name}
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
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                class="block py-2 px-4 hover:bg-gray-200"
                onClick={() => menuStatus.value = false}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
