import "./globals.css";
import Header from "./Header";

export const metadata = {
  title: "Amit Bahuguna | Full Stack Developer Portfolio",
  description: "Portfolio of Amit Bahuguna, a passionate full stack developer specializing in modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#0a192f] text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <Header />
        {children}
      </body>
    </html>
  );
}
