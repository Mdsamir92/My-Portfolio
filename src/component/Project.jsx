import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    title: "E-Commerce Website",
    image: "/projects/samstore.png",
    description:
      "A full-featured e-commerce platform built with Next.js, MongoDB, Cloudinary, and Tailwind CSS. Includes product management, authentication, cart system, and secure checkout flow.",
    live: "https://sam-store-lac.vercel.app/",
    github: "https://github.com/Mdsamir92/Sam-Store",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    image: "/projects/dashboard.png",
    description:
      "A modern and responsive admin dashboard built with React, Tailwind CSS, and Shadcn UI. Features dynamic charts, data tables, authentication, and role-based UI components.",
    live: "https://sam-admin-dashboard.vercel.app/",
    github: "https://github.com/Mdsamir92/Admin-Dashboard",
  },
  {
    id: 3,
    title: "Unsplash Gallery",
    image: "/projects/samGallery.png",
    description:
      "A dynamic image search application powered by the Unsplash API. Built with React and Tailwind CSS, featuring real-time search, responsive grid layout, and smooth UI interactions.",
    live: "https://sam-wllpaper.vercel.app/",
    github: "https://github.com/Mdsamir92/Unsplash-wllpaper",
  },
  {
    id: 4,
    title: "Todo List",
    image: "/projects/todo.jpg",
    description:
      "A task management application built with React and Firebase. Includes real-time data sync, authentication, CRUD operations, and a clean, responsive UI design.",
    live: "https://todo-f45f0.web.app/",
    github: "https://github.com/Mdsamir92/Todo-firebase",
  },
  {
    id: 5,
    title: "Aadrila Technology",
    image: "/projects/sam-tech.png",
    description:
      "Converted a Figma design into a fully responsive React.js application using Tailwind CSS. Implemented pixel-perfect UI, reusable components, and clean, scalable frontend architecture.",
    live: "https://sam-tech-sigma.vercel.app/",
    github: "https://github.com/Mdsamir92/Aadrila-tech",
  },
];

export default function Projects() {

  const swiperRef = useRef(null);

  return (
    <section
      id="projects"
      className="relative  py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      <div className="relative mt-12 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center text-white mb-16">
          My Projects
        </h2>

        {/* Swiper Wrapper */}
        <div className="relative">
          {/* LEFT ARROW */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 
                   w-12 h-12 rounded-full backdrop-blur-xl 
                   bg-white/10 border border-white/10
                   hover:bg-indigo-500/30 transition items-center justify-center text-white"
          >
            ❮
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 
                   w-12 h-12 rounded-full backdrop-blur-xl 
                   bg-white/10 border border-white/10
                   hover:bg-indigo-500/30 transition items-center justify-center text-white"
          >
            ❯
          </button>

          <Swiper
            modules={[Pagination, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {data.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative rounded-2xl p-[2px] 
                         bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-12"
                >
                  <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-white/10">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div
                        className="absolute inset-0 bg-black/70 opacity-0 
                               group-hover:opacity-100 transition duration-500 
                               flex items-center justify-center gap-4"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white text-indigo-600 font-semibold rounded-lg 
                                 hover:bg-indigo-600 hover:text-white transition"
                        >
                          Live
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white text-indigo-600 font-semibold rounded-lg 
                                 hover:bg-indigo-600 hover:text-white transition"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
