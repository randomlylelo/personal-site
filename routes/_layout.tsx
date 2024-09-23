import { PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import Navbar from "@islands/Navbar.tsx";

export default function Layout({ Component, state }: PageProps) {
  const menuStatus = useSignal(false);

  // do something with state here
  return (
    <div class="min-h-screen bg-gray-100 text-gray-900">
      <Navbar menuStatus={menuStatus} />
      <Component />
      <footer>
        <div class="mx-auto px-4 py-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Leo Zhang. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
