import { Github, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-gray-300 pt-16 pb-10 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-600 blur-3xl opacity-10 top-0 left-0"></div>
      <div className="absolute w-96 h-96 bg-indigo-600 blur-3xl opacity-10 bottom-0 right-0"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-white mb-4">
            Sam Portfolio
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Building modern, scalable and high-performance web applications
            using React, Next.js and modern UI architecture.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a href="/about" className="hover:text-indigo-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-indigo-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-indigo-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect With Me</h4>

          <div className="flex gap-5">
            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://github.com/Mdsamir92?tab=repositories"
              target="_blank"
              className="p-3 rounded-full bg-white/5 hover:bg-indigo-500/20 transition border border-white/10"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://www.youtube.com/@md_samir92"
              target="_blank"
              className="p-3 rounded-full bg-white/5 hover:bg-red-500/20 transition border border-white/10"
            >
              <Youtube size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://instagram.com/md_samir92"
              target="_blank"
              className="p-3 rounded-full bg-white/5 hover:bg-pink-500/20 transition border border-white/10"
            >
              <Instagram size={20} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t font-serif border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sam Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
