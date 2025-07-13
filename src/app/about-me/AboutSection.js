import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🎨",
    title: "Frontend Architecture",
    desc: "Architecting scalable React applications with TypeScript, state management, and performance optimization techniques."
  },
  {
    icon: "⚙️",
    title: "Backend Engineering",
    desc: "Designing RESTful APIs and GraphQL endpoints with Node.js, microservices, and database optimization."
  },
  {
    icon: "✨",
    title: "DevOps & Performance",
    desc: "Implementing CI/CD pipelines, Docker, cloud deployment, and performance monitoring with Core Web Vitals."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="section flex flex-col items-center justify-center min-h-[60vh] bg-[var(--background)]">
      <Fade triggerOnce direction="up" cascade damping={0.2}>
        <div className="w-full max-w-4xl flex flex-col gap-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--primary)] mb-2 text-center">
            About Me
          </h1>
          <p className="text-base md:text-lg text-[var(--secondary)] text-center mb-4">
            Full-stack engineer specializing in TypeScript, React, and cloud-native architectures. Building performant, scalable applications with modern development practices and user-centric design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {features.map((f) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card flex flex-col items-center gap-3 p-6 text-center"
              >
                <span className="text-4xl mb-2">{f.icon}</span>
                <h3 className="text-lg font-bold text-[var(--primary)]">{f.title}</h3>
                <p className="text-[var(--secondary)] text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
} 