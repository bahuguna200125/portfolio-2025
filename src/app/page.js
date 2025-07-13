"use client";
import { motion } from "framer-motion";

// --- Resume Content ---
const NAME = "Amit Bahuguna";
const TITLE = "Full Stack Developer (Intern)";
const LOCATION = "Almora, India";
const EMAIL = "amitbahuguna2001@gmail.com";
const PHONE = "8192047322";
const LINKEDIN = "https://linkedin.com/in/AmitBahuguna";
const GITHUB = "https://github.com/bahuguna200125";
const AVATAR = "/avatar.png"; // Place your avatar in public/

const ABOUT = `As a skilled software developer and passionate problem-solver, I leverage technology to drive innovation and efficiency. With expertise in PHP, HTML, JS, SQL, and CSS, I create digital experiences that matter.`;

const SKILLS = [
  "PHP", "HTML", "CSS", "Bootstrap", "MySQL", "Git", "WordPress", "JavaScript", "PhpMyAdmin"
];

const PROJECTS = [
  {
    title: "My Portfolio Website",
    period: "08/2024 - 09/2024",
    description: "Created and deployed a personal portfolio website via GitHub, showcasing my skills and future project updates.",
    tech: ["HTML", "CSS", "Git"],
    link: "#"
  },
  {
    title: "Result Management System",
    period: "09/2024 - 11/2024",
    description: "Developed a user-friendly Result Management System using PHP, HTML, CSS, and MySQL. Secure database for managing student results.",
    tech: ["PHP", "HTML", "CSS", "MySQL"],
    link: "#"
  },
  {
    title: "The Saku Group (WordPress)",
    period: "03/2025 - 05/2025",
    description: "Developed a custom WordPress website for a book publishing company, focusing on responsive UI and feature integration.",
    tech: ["WordPress", "PHP", "CSS"],
    link: "#"
  },
  {
    title: "Pocket-Way (Smart Travel Guide)",
    period: "04/2025 - 06/2025",
    description: "Built a public transport guide website for Uttarakhand, featuring route maps, fare details, and bus schedules.",
    tech: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
    link: "#"
  }
];

const SOCIALS = [
  { href: GITHUB, icon: "github" },
  { href: LINKEDIN, icon: "linkedin" },
  { href: `mailto:${EMAIL}`, icon: "mail" },
];

// --- Animations ---
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

function SocialIcon({ type }) {
  if (type === "github") return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" /></svg>
  );
  if (type === "linkedin") return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" /></svg>
  );
  if (type === "mail") return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" /></svg>
  );
  return null;
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center min-h-[90vh] pt-32 pb-16 text-center overflow-hidden bg-[var(--background)]">
        {/* Background Accent */}
        <motion.div
          className="absolute inset-0 pointer-events-none select-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--primary)]/10 blur-3xl z-0" />
        </motion.div>
        <motion.div
          className="relative z-10 flex flex-col items-center gap-6"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={fadeIn} className="w-28 h-28 rounded-full bg-[var(--primary)]/20 border-4 border-[var(--primary)] flex items-center justify-center mb-2 overflow-hidden">
            <img src={AVATAR} alt="Avatar" className="w-full h-full object-cover" />
          </motion.div>
          <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold text-[var(--primary)] mb-2 drop-shadow-sm">
            Hi, I'm {NAME}
          </motion.h1>
          <motion.h2 variants={fadeIn} className="text-xl md:text-2xl text-[var(--secondary)] mb-4 font-medium">
            {TITLE}
          </motion.h2>
          <motion.p variants={fadeIn} className="max-w-xl text-[var(--foreground)] mb-6 text-base md:text-lg">
            {ABOUT}
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="button-primary">View My Work</a>
            <a href="#contact" className="button-secondary">Get In Touch</a>
          </motion.div>
          <motion.div variants={fadeIn} className="flex gap-4 mt-4">
            {SOCIALS.map(s => (
              <a key={s.icon} href={s.href} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label={s.icon}>
                <SocialIcon type={s.icon} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section flex flex-col items-center justify-center bg-[var(--card-bg)]">
        <motion.div className="card w-full max-w-2xl p-8 md:p-12 flex flex-col gap-6 items-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">About Me</h2>
          <p className="text-lg text-[var(--foreground)] text-center">{ABOUT}</p>
          <div className="flex flex-col md:flex-row gap-4 mt-4 text-[var(--secondary)] text-sm justify-center">
            <span><strong>Location:</strong> {LOCATION}</span>
            <span><strong>Email:</strong> <a href={`mailto:${EMAIL}`} className="text-[var(--primary)] underline">{EMAIL}</a></span>
            <span><strong>Phone:</strong> <a href={`tel:${PHONE}`} className="text-[var(--primary)] underline">{PHONE}</a></span>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section flex flex-col items-center justify-center bg-[var(--background)]">
        <motion.div className="w-full max-w-5xl flex flex-col gap-8 items-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {PROJECTS.map((proj, i) => (
              <motion.div key={proj.title} className="card p-6 flex flex-col gap-3" variants={fadeIn}>
                <div className="flex items-center gap-2 text-xs text-[var(--secondary)] mb-1">
                  <span className="font-semibold text-[var(--primary)]">{proj.title}</span>
                  <span className="ml-auto">{proj.period}</span>
                </div>
                <div className="text-[var(--foreground)] text-base mb-2">{proj.description}</div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tech.map(t => (
                    <span key={t} className="px-2 py-1 rounded bg-[var(--button-hover-bg)] text-xs text-[var(--primary)] font-medium">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section flex flex-col items-center justify-center bg-[var(--card-bg)]">
        <motion.div className="w-full max-w-3xl flex flex-col gap-8 items-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {SKILLS.map(skill => (
              <span key={skill} className="px-4 py-2 rounded-lg bg-[var(--button-hover-bg)] text-[var(--primary)] font-semibold text-base shadow-sm">{skill}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section flex items-center justify-center min-h-[60vh] bg-[var(--background)]">
        <motion.div
          className="card w-full max-w-xl p-8 md:p-12 flex flex-col gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2 text-center">Contact</h2>
          <p className="text-base md:text-lg text-[var(--secondary)] text-center mb-4">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
          </p>
          <div className="footer-socials flex justify-center mb-4">
            {SOCIALS.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.icon}
              >
                <SocialIcon type={s.icon} />
              </a>
            ))}
          </div>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-4 py-2 rounded-lg border border-[var(--border)] bg-transparent text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-lg border border-[var(--border)] bg-transparent text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="px-4 py-2 rounded-lg border border-[var(--border)] bg-transparent text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
              required
            />
            <motion.button
              type="submit"
              className="button-primary w-full"
              whileTap={{ scale: 0.97 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>
    </>
  );
}
