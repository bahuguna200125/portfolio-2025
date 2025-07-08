import Image from "next/image";

export default function AboutMe() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-[var(--background)] via-[var(--primary)]/10 to-[var(--background)]">
      <div className="w-full max-w-4xl rounded-3xl shadow-2xl p-0 md:p-1 bg-white/70 dark:bg-[var(--background)]/80 backdrop-blur-md border border-[var(--border)]">
        <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
      
          <div className="relative w-full md:w-96 h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg border-2 border-[var(--primary)] bg-[var(--background)]">
            <Image
              src="/assets/amit.jpg"
              alt="Amit Bahuguna"
              fill
              className="object-cover"
              priority
            />
          </div>

 
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--primary)] leading-tight drop-shadow-sm">
              👋 Hi, I'm Amit Bahuguna
            </h1>
            <p className="text-base md:text-lg text-[var(--secondary)] leading-relaxed">
              A passionate <strong>Full Stack Developer Intern</strong> who enjoys
              crafting seamless web solutions. I build modern interfaces using tools
              like <strong>React, Tailwind</strong> and handle backend logic with
              <strong> PHP, Node.js</strong>. I value clean code, performance, and
              user experience.
            </p>
            <div className="border-l-4 border-[var(--accent)] bg-[var(--accent)]/10 px-4 py-3 rounded-md">
              <p className="text-sm italic text-[var(--foreground)]">
                “I turn ideas into reality — one line of code at a time.”
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[var(--primary)] mb-3">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {["HTML", "CSS", "Tailwind", "Bootstrap", "PHP", "WordPress", "React", "Node.js", "JavaScript", "MySQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[var(--primary)]/10 border border-[var(--primary)] rounded-full text-xs font-medium text-[var(--foreground)] transition-all hover:bg-[var(--primary)]/30 hover:scale-105 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
