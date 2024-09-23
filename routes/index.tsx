// routes/index.tsx
import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Navbar from "@islands/Navbar.tsx";
import SectionHeader from "@components/SectionHeader.tsx";
import { Github, Linkedin, Mail, Twitter } from "lucide";

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
          <section id="hero" class="text-center pt-20">
            <h1 class="text-6xl font-bold mb-4">Hi, I'm Leo Zhang</h1>
            <p class="text-xl mb-8">
              A fullstack software engineer and student passionate about machine
              learning, robotics, and dev ops.
            </p>
            <div class="flex justify-center space-x-4 mb-8">
              <a
                href="https://github.com/randomlylelo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-primary"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/leozhang3"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-primary"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/randomlylelo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-primary"
              >
                <Twitter size={24} />
              </a>
            </div>
          </section>

          <div id="projects" />
          <section class="pt-20">
            <SectionHeader text="Projects" href="#projects" />
            <div class="grid md:grid-cols-2 gap-6">
              <a
                href="https://github.com/aerorobotics/ros2basilisk"
                class="block bg-white p-6 rounded-lg shadow transition transform hover:shadow-lg hover:scale-105"
              >
                <CardHeader text="ros2basilisk" />
                <p class="mb-4">
                  Open-source wrapper to provide a ROS2-interface for Basilisk. To do spacecraft simulations in ROS2.
                </p>
              </a>

              <a
                href="https://github.com/randomlylelo/dotfiles"
                class="block bg-white p-6 rounded-lg shadow transition transform hover:shadow-lg hover:scale-105"
              >
                <CardHeader text="dotfiles" />
                <p class="mb-4">
                  Personal dotfiles for my local computer setup. Includes configurations for zsh and wallpapers.
                </p>
              </a>
            </div>
          </section>

          <div id="me" />
          <section class="pt-20">
            <SectionHeader text="Me" href="#me" />
            <p class="text-xl">
              I am currently a student at Caltech studying Computer Science. I
              currently live in California. I am interested in anything computer
              related. I like to tinker with hardware and software. You can find
              some of my work on my{" "}
              <a href="https://github.com/randomlylelo" class="underline">
                Github
              </a>.
            </p>
          </section>

          <div id="blog" />
          <section class="pt-20">
            <SectionHeader text="Blog" href="#blog" />
            <p class="text-xl">
              Coming soon.
            </p>
          </section>
        </main>

        <footer>
          <div class="mx-auto px-4 py-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} Leo Zhang. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
