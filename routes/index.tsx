// routes/index.tsx
import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Navbar from "../islands/Navbar.tsx";
import { Github, Linkedin, Mail, Twitter } from "lucide";

export default function Home() {
  const menuStatus = useSignal(false);

  return (
    <>
      <Head>
        <title>Leo Zhang - Personal Website</title>
      </Head>
      <div class="min-h-screen bg-gray-100 text-gray-900">
        <Navbar menuStatus={menuStatus} />
        
        <main class="mx-auto px-4 py-8 max-w-4xl">
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

          <section id="about" class="py-20">
            <h2 class="text-4xl font-bold mb-8">About Me</h2>
            <div class="space-y-6">
              <p>
                I'm a Computer Science student at Caltech, passionate about software engineering, machine learning, and robotics. My journey in tech has been driven by a curiosity to understand and create innovative solutions.
              </p>
              <div>
                <h3 class="text-2xl font-semibold mb-4">Skills</h3>
                <ul class="list-disc list-inside">
                  <li>Languages: Python, C, C#, Java, TypeScript, JavaScript</li>
                  <li>Frameworks: React, Next.js, Fresh, ROS</li>
                  <li>Tools: Git, Linux, AWS, GCP, PostgreSQL, TensorFlow</li>
                </ul>
              </div>
              <div>
                <h3 class="text-2xl font-semibold mb-4">Interests</h3>
                <p>
                  Outside of coding, I enjoy [Your Interests]. I'm always eager to learn and take on new challenges in the ever-evolving world of technology.
                </p>
              </div>
            </div>
          </section>

          <section id="projects" class="py-20">
            <h2 class="text-4xl font-bold mb-8">Projects</h2>
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

          <section id="contact" class="py-20">
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

        <footer class="bg-gray-800 text-white py-6">
          <div class="container mx-auto px-4 text-center">
            <p>&copy; 2024 Leo Zhang. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
