import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Tesla",
  description: "A Next.js project with a Tesla-themed layout",
};

export default function RootLayout({ children }) {
  const links = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/contact", name: "Contact" },
    { link: "/services", name: "Services" },
  ];
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <nav className=" flex justify-between items-center p-4 bg-black">
          <div className="flex items-center gap-2">
            <div>
              <svg
                className="w-8 h-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <p className="text-white">MY TESLA</p>
          </div>
          <ul className="bg-black text-white p-4 justify-end flex flex-wrap flex-col md:flex-row md:gap-4  ">
            {links.map((link) => (
              <li
                className="hover:bg-gray-100 hover:text-black"
                key={link.name}
              >
                <a className="py-4 px-2" href={link.link}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <main>{children}</main>
        <footer className="bg-black text-white p-4 text-center">
          © 2026 My Next.js Project{" "}
        </footer>
      </body>
    </html>
  );
}
