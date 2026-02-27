import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const education = [
  {
    title:
      "Bachelor of Technology (B.Tech) in Computer Science Engineering",
    year: "2018 – 2022",
    description:
      "Pailan College of Management & Technology (MAKAUT), Kolkata",
  },
  {
    title: "Higher Secondary (WBCHSE)",
    year: "2018",
    description:
      "Lajpat High School, Kolkata | Stream: Physics, Chemistry, Mathematics",
  },
  {
    title: "Secondary Education (WBBSE)",
    year: "2016",
    description: "Modern Arya Parishad, Kolkata",
  },
];
const skillCategories = [
  {
    category: "Frontend",
    items: [
      { name: "Html", level: 5 },
      { name: "Css", level: 5 },
      { name: "Javascript", level: 5 },
      { name: "Typescript", level: 4.5 },
      { name: "React", level: 5 },
      { name: "Next.js", level: 4.5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Bootstrap", level: 4 },
      { name: "Shadcn", level: 4 },
        { name: "Material UI", level: 3.5 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Firebase", level: 5 },
      { name: "Node.js", level: 4 },
      { name: "MongoDb", level: 4 },
      { name: "REST API", level: 4 },
      { name: "PHP", level: 3 },
      { name: "MySQL", level: 3 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 4 },
      { name: "VS Code", level: 5 },
      { name: "Figma", level: 4 },
      { name: "Responsive Design", level: 5 },
    ],
  },
];

export default function EducationSkills() {
  return (
    <section className="relative py-16 bg-slate-950 text-gray-300 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-600 blur-3xl opacity-10 top-0 left-0"></div>
      <div className="absolute w-96 h-96 bg-indigo-600 blur-3xl opacity-10 bottom-0 right-0"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Education & Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT - Education */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-6 border-l border-white/10"
              >
                <span className="absolute -left-[7px] top-1 w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>

                <h3 className="text-lg font-semibold text-white">
                  {item.title} - {item.year}
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT - Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-6">
                  {group.category}
                </h3>

                <div className="space-y-5">
                  {group.items.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-500">
                          {skill.level * 20}%
                        </span>
                      </div>

                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 rounded-full transition-all duration-700"
                          style={{ width: `${skill.level * 20}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
