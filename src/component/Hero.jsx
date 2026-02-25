import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center 
bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
pt-24 overflow-hidden text-white"
    >
      {/* ===== Animated Gradient Bubbles ===== */}
      <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 top-20 -left-20 animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 rounded-full blur-3xl opacity-20 bottom-0 right-0 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-10 top-1/2 left-1/3"></div>

      {/* ===== Glass Overlay Layer ===== */}
      <div className="absolute inset-0 backdrop-blur-[120px] bg-white/5"></div>

      {/* ===== Container ===== */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold-gradient animated-gradient-subtitle text-2xl md:text-4xl font-semibold mb-4 font-quicksand">
              Full Stack Developer
            </p>

            <h1 className="text-3xl md:text-6xl font-serif font-bold leading-tight">
              Hi, I'm <br />
              <span className="animated-gradient-text">Mohammad Samir</span>
            </h1>

            <p className="font-opensans mt-6 text-lg text-gray-300 max-w-lg">
              I design and develop modern, responsive and high-performance web
              applications using React, Tailwind and scalable UI architecture.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="md:px-8 px-4 py-2 md:py-3 rounded-lg 
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                       hover:opacity-90 transition shadow-lg font-outfit"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="md:px-8 px-4 py-2 md:py-3 rounded-lg 
                       border border-white/20 text-white 
                       hover:bg-white/10 transition font-outfit"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Animated Gradient Border */}
              <div
                className="absolute -inset-1 rounded-3xl 
                          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                          opacity-75 blur-sm animate-spin-slow"
              ></div>

              {/* Glass Card */}
              <div
                className="relative backdrop-blur-xl bg-white/10 
                          border border-white/20 
                          rounded-3xl p-3 shadow-2xl"
              >
                <img
                  src="/profile.jpg"
                  alt="Mohammad Samir"
                  className="w-72 md:w-96 rounded-2xl object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
