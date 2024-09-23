import { useSignal } from "@preact/signals";
import Navbar from "../islands/Navbar.tsx";

const LandingPage = () => {
  const menuStatus = useSignal(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar menuStatus={menuStatus} />
      <main className="container mx-auto px-4 py-8">
        <section id="hero" className="text-center py-20">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Leo Zhang</h2>
          <p className="text-xl mb-8">Computer Science Student at Caltech | Aspiring Software Engineer</p>
          <a href="#contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">Get in Touch</a>
        </section>

        <section id="about" className="py-20">
          <h3 className="text-3xl font-semibold mb-6">About Me</h3>
          <p className="text-lg">
            I'm a Computer Science student at Caltech with a passion for software engineering and machine learning. 
            My experience spans from developing features for Azure at Microsoft to conducting research in robotics and computer vision.
          </p>
        </section>

        <section id="projects" className="py-20">
          <h3 className="text-3xl font-semibold mb-6">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">MediDetectAI</h4>
              <p>AI-powered medical image diagnosis using CNN, VIT, ResNet, and Densenet models.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Inclusifi</h4>
              <p>Multilingual banking PWA integrating accounts and GPT for various financial tasks.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Leo Zhang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

// export default function Home() {
//   const count = useSignal(3);
//   return (
//     <div class="px-4 py-8 mx-auto bg-[#86efac]">
//       <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
//         <img
//           class="my-6"
//           src="/logo.svg"
//           width="128"
//           height="128"
//           alt="the Fresh logo: a sliced lemon dripping with juice"
//         />
//         <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
//         <p class="my-4">
//           Try updating this message in the sigma
//           <code class="mx-2">./routes/index.tsx</code> file, and refresh.
//         </p>
//         <Counter count={count} />
//       </div>
//     </div>
//   );
// }
