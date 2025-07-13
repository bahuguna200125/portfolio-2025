import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion animations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Fortune Galaxy",
    description: "A casino affiliates and influencer marketing platform with advanced analytics and real-time tracking.",
    tech: ["Next.js", "Firebase", "Supabase", "Redux", "Material UI"]
  },
  {
    title: "East Coast Home Care",
    description: "A comprehensive healthcare platform connecting patients with qualified professionals.",
    tech: ["WordPress", "PHP", "MySQL", "UI Design"]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section bg-[var(--background)] min-h-[60vh]">
      <Fade triggerOnce direction="up" cascade damping={0.2}>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--primary)] mb-8 text-center">Projects</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.div key={idx} className="card p-6 flex flex-col gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-bold text-[var(--primary)]">{project.title}</h2>
                <p className="text-[var(--secondary)] text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-[var(--primary)]/10 border border-[var(--primary)] rounded-full text-xs text-[var(--foreground)]">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
} 