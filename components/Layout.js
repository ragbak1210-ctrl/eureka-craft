import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/quiz", label: "Quiz" },
    { href: "/clarity-xray", label: "Clarity X-Ray" },
    { href: "/blogs", label: "Blogs" },
    { href: "/culture", label: "Culture Deck" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#ffffff] via-[#fffcf0] to-[#fff4cc] text-black">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-[#ffcf00] hover:scale-105 transition-transform">
            Eureka Craft
          </Link>
          <div className="flex space-x-8 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <span
                  className={`cursor-pointer hover:text-[#ffcf00] transition-colors ${
                    router.pathname === href ? "text-[#ffcf00]" : "text-black"
                  }`}
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow py-12 px-6 md:px-10">{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white py-10 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#ffde59] font-bold text-xl">Eureka Craft</p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Eureka Craft · Crafted with clarity.
          </p>
          <p className="italic font-shadow text-[#ffcf00] text-lg">"Where boring brands become unforgettable."</p>
        </div>
      </footer>
    </div>
  );
}
