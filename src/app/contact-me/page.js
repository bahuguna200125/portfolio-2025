export default function ContactMe() {
  return (
    <main className="section flex items-center justify-center min-h-[60vh] bg-[var(--background)]">
      <div className="card w-full max-w-xl p-8 md:p-12 flex flex-col gap-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--primary)] mb-2 text-center">
          Contact
        </h1>
        <p className="text-base md:text-lg text-[var(--secondary)] text-center mb-4">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
        </p>
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
          <button
            type="submit"
            className="button-primary w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
