import React from "react";
import Navbar from "../components/Navbar";

const LaunchPage = () => {
  return (
    <div className="bg-black text-white w-screen min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col">
        <img
          src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
          alt="coding background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex flex-col h-full">
          <Navbar />
          <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-6xl font-bold">KO0JI</h1>
            <p className="mt-4 text-xl max-w-2xl text-white/80">
              Lightning-fast AI-powered Code Reviews. Get instant, actionable feedback for your code — simple, precise, and powerful.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-10">Why Choose KO0JI?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white/5 rounded-xl">
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
              alt="fast review"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl mb-2">Blazing Fast</h3>
            <p className="text-white/70">
              Get instant insights on your code in seconds, without waiting for human review.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl">
            <img
              src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg"
              alt="accurate review"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl mb-2">Accurate Feedback</h3>
            <p className="text-white/70">
              Receive precise, structured, and context-aware code reviews tailored to your project.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
              alt="developer friendly"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl mb-2">Developer Friendly</h3>
            <p className="text-white/70">
              Built for developers, with clear feedback that helps you learn and improve faster.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-10">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
            alt="workflow"
            className="rounded-lg shadow-lg"
          />
          <ul className="space-y-6 text-lg text-white/80">
            <li>👉 Paste your code into the review panel.</li>
            <li>👉 KO0JI analyzes your code instantly.</li>
            <li>👉 Get clear feedback, suggestions, and fixes.</li>
            <li>👉 Copy-paste improvements directly to your project.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-white/5">
        <h2 className="text-4xl font-semibold mb-6">
          Ready to Upgrade Your Code Reviews?
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-6">
          Experience blazing-fast, AI-powered feedback for all your projects. No signups, no clutter — just clean, instant reviews.
        </p>
        <a
          href="/review"
          className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
        >
          Try It Now
        </a>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} KO0JI. Built for developers, by developers.
      </footer>
    </div>
  );
};

export default LaunchPage;
