import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "d9e21f08-d77d-4e0d-bf4e-db6c1a0ec14f"); // 👈 replace

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Message Sent Successfully ✅");
      e.target.reset();
    } else {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-2xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl md:p-10 p-4 shadow-2xl"
      >
        <h2 className="md:text-4xl text-2xl font-bold text-white mb-10 text-center font-serif">
          Send your Query
        </h2>

        <form onSubmit={onSubmit} className="space-y-8">
          {/* Hidden Fields */}
          <input
            type="hidden"
            name="subject"
            value="New Message from Samir Portfolio"
          />
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition"
              placeholder="Your Name"
            />
            <label
              className="absolute left-4 top-2 text-sm text-gray-400 transition-all 
              peer-placeholder-shown:top-4 
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-500 
              peer-focus:top-2 
              peer-focus:text-sm 
              peer-focus:text-purple-400"
            >
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 transition"
              placeholder="Email Address"
            />
            <label
              className="absolute left-4 top-2 text-sm text-gray-400 transition-all 
              peer-placeholder-shown:top-4 
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-500 
              peer-focus:top-2 
              peer-focus:text-sm 
              peer-focus:text-indigo-400"
            >
              Email Address
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows="4"
              required
              className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-500/30 transition resize-none"
              placeholder="Your Message"
            ></textarea>
            <label
              className="absolute left-4 top-2 text-sm text-gray-400 transition-all 
              peer-placeholder-shown:top-4 
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-500 
              peer-focus:top-2 
              peer-focus:text-sm 
              peer-focus:text-pink-400"
            >
              Your Message
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-gray-300">{status}</p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
