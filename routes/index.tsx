// routes/index.tsx
import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Navbar from "@islands/Navbar.tsx";
import SectionHeader from "@components/SectionHeader.tsx";
import { Github, Linkedin, Mail, Twitter } from "lucide";




export default function Home() {
  const menuStatus = useSignal(false);

  return (
    <>
      <Head>
        <title>Leo Zhang</title>
      </Head>
      <div class="min-h-screen bg-gray-100 text-gray-900">
        <Navbar menuStatus={menuStatus} />
        
        <main class="mx-auto px-4 py-2 max-w-4xl">
          <section id="hero" class="text-center py-20">
            <h1 class="text-6xl font-bold mb-4">Hi, I'm Leo Zhang</h1>
            <p class="text-xl mb-8">
              A software engineer and student passionate about machine learning, robotics, and dev ops.
            </p>
            <div class="flex justify-center space-x-4 mb-8">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-indigo-600">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-indigo-600">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-indigo-600">
                <Twitter size={24} />
              </a>
            </div>
          </section>
          <section id="projects" class="py-10">
            {/* Replace the original <h2> with the SectionHeader component */}
            <SectionHeader text="Projects" href="#projects" />
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-xl font-semibold mb-2">Inclusifi</h3>
                <p class="mb-4">Multilingual banking PWA integrating accounts and GPT for various financial tasks.</p>
                <a href="#" class="text-indigo-600 hover:text-indigo-800">Learn more →</a>
              </div>
              <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-xl font-semibold mb-2">ros2basilisk</h3>
                <p class="mb-4">Open-source wrapper to assist in spacecraft simulation, reducing physical testing time.</p>
                <a href="#" class="text-indigo-600 hover:text-indigo-800">Learn more →</a>
              </div>
              <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-xl font-semibold mb-2">Homelab</h3>
                <p class="mb-4">Personal server setup running Ubuntu with various open-source projects and services.</p>
                <a href="#" class="text-indigo-600 hover:text-indigo-800">Learn more →</a>
              </div>
            </div>
          </section>

          <section id="contact" class="py-10">
            <h2 class="text-4xl font-bold mb-8">Contact</h2>
            <div class="bg-white p-6 rounded-lg shadow">
              <p class="mb-4">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
              <div class="flex space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-indigo-600">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-indigo-600">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-indigo-600">
                  <Twitter size={24} />
                </a>
                <a href="mailto:your.email@example.com" class="text-gray-600 hover:text-indigo-600">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer >
          <div class="mx-auto px-4 pb-2 text-center">
            <p>&copy; {new Date().getFullYear()} Leo Zhang. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
