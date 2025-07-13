import { Fade } from "react-awesome-reveal";

const skills = [
  "React","Next.js","TypeScript","Tailwind CSS","Redux","Node.js","Express","PostgreSQL","MongoDB","GraphQL","Docker","AWS","Figma","HTML5","CSS3","JavaScript"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section bg-[var(--background)] flex flex-col items-center justify-center">
      <div className="card w-full max-w-4xl p-8 md:p-12 flex flex-col gap-8 fade-in">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary)] mb-2 text-center">Skills & Technologies</h2>
        <p className="text-base md:text-lg text-[var(--secondary)] text-center mb-4">
          Here are the technologies and skills I work with to bring ideas to life.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map(skill => (
            <span key={skill} className="px-4 py-2 bg-[var(--primary)]/10 border border-[var(--primary)] rounded-full text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--primary)]/20">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
} 