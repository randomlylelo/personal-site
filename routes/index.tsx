// routes/index.tsx
import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Navbar from "../islands/Navbar.tsx";
import { Linkedin, Mail, Twitter, Github } from "lucide";

export default function Home() {
  const menuStatus = useSignal(false);

  return (
    <>
      <Head>
        <title>Leo Zhang - Personal Website</title>
      </Head>
      <div class="min-h-screen bg-gray-100 text-gray-900">
        <Navbar menuStatus={menuStatus} />
        
        <main class="container mx-auto px-4 py-8">
          <section id="hero" class="text-center py-20">
            <h1 class="text-6xl font-bold mb-4">Hi, I'm Leo Zhang</h1>
            <p class="text-2xl mb-8">Computer Science Student at Caltech | Aspiring Software Engineer</p>
            <p class="text-xl mb-8">
              I'm passionate about software engineering, machine learning, and robotics.
              My journey spans from developing features for Azure at Microsoft to conducting research in computer vision.
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
              <a href="mailto:your.email@example.com" class="text-gray-600 hover:text-indigo-600">
                <Mail size={24} />
              </a>
            </div>
            <a href="#contact" class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">Get in Touch</a>
          </section>

          <section id="projects" class="py-20">
            <h2 class="text-3xl font-semibold mb-6">Featured Projects</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-xl font-semibold mb-2">MediDetectAI</h3>
                <p class="mb-4">AI-powered medical image diagnosis using CNN, VIT, ResNet, and Densenet models.</p>
                <a href="#" class="text-indigo-600 hover:text-indigo-800">Learn more →</a>
              </div>
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
        </main>

        <footer class="bg-gray-800 text-white py-6">
          <div class="container mx-auto px-4 text-center">
            <p>&copy; 2024 Leo Zhang. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
