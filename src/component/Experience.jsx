import { motion } from "framer-motion";

const experiences = [
  {
    year: "May 2024 - Present",
    role: "Full Stack Developer",
    company: "Jodisure",
    projects: [
      { name: "Jodisure Main Platform", url: "https://jodisure.com" },
      { name: "Wedding Stays", url: "https://weddingstays.in/" },
      { name: "Rivayatt", url: "https://rivayatt-26.web.app/" },
      {
        name: "Connection Intelligence",
        url: "https://connectionintelligence.in/",
      },
      { name: "Durapot", url: "https://durapot.com" },
      {
        name: "Exchange Hub",
        url: "https://exchangehub-e3f59.web.app/",
      },
    ],
    skills: ["React", "Next.js", "Firebase", "Node.js", "Tailwind Css"],
    type: "Fulltime",
    description:
      "Driving end-to-end frontend architecture for a production-scale wedding platform. Designing modular component systems with React & Next.js, integrating Firebase services (Auth, Firestore), implementing scalable state management, and delivering high-performance, SEO-optimized user experiences.",
  },

  {
    year: "March 2023 - April 2024",
    role: "Freelance Full Stack Developer",
    company: "Independent / Remote",
    type: "Contract",
    skills: [
      "React",
      "PHP",
      "MySQL",
      "Material ui",
      "Bootstrap",
      "Responsive UI",
    ],
    description:
      "Delivered client-based web solutions as a freelance developer. Built responsive frontend applications using React & Next.js, and developed backend modules using PHP and MySQL. Designed REST APIs, implemented authentication flows, and optimized database queries for performance.",
  },
  {
    year: "Nov 2021 - Jan 2022",
    role: "Full Stack Developer Intern",
    company: "Academy of Skills Development (ASD)",
    type: "Internship",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Nodejs",
      "Rest Apis",
     
    ],
    description:
      "Completed 3-month industrial training as a Full Stack Developer. Developed an online code compiler project supporting real-time code execution and output rendering. Implemented backend logic using PHP & MySQL and built responsive frontend interfaces for user interaction.",
  },
];

export default function Experience() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-12  overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      <div className="relative mt-12 max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="md:text-4xl text-3xl font-serif font-extrabold tracking-tight text-white">
            Experience
          </h2>
          <span className="text-indigo-400 font-semibold text-lg">
            ( {experiences.length.toString().padStart(2, "0")} )
          </span>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-white/10 h-full hidden md:block"></div>

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative grid md:grid-cols-2 gap-12 items-start"
              >
                {/* LEFT SIDE */}
                <div className="md:text-right md:pr-10">
                  <h3 className="text-2xl md:text-4xl font-bold text-white">
                    {exp.year}
                  </h3>

                  <p className="mt-3 text-gray-400 font-medium">{exp.role}</p>

                  <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs font-outfit px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {exp.projects && (
                    <div className="mt-6">
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                        Production Systems
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.projects.map((project, i) => (
                          <a
                            key={i}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-indigo-400/40 transition"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-300 group-hover:text-indigo-400 transition">
                                {project.name}
                              </span>

                              <span className="text-xs text-gray-500 group-hover:text-indigo-400 transition">
                                ↗
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* RIGHT SIDE */}
                <div className="md:pl-10">
                  <h4 className="text-2xl font-bold text-white">
                    {exp.company}
                  </h4>

                  <span className="inline-block mt-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
                    {exp.type}
                  </span>

                  <p className="mt-5 text-gray-400 leading-relaxed max-w-xl">
                    {exp.description}
                  </p>
                </div>

                {/* CENTER DOT */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2">
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full z-10 relative"></div>
                    <div className="absolute inset-0 bg-indigo-500 blur-md opacity-50 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
