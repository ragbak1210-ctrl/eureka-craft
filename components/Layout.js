import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-['Raleway']">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand */}
          <h1 className="text-2xl font-extrabold text-[#ffcf00] tracking-wide">
            Eureka Craft
          </h1>

          {/* Navigation */}
          <div className="space-x-6 text-base font-medium">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/quiz", label: "Quiz" },
              { href: "/clarity-xray", label: "Clarity X-Ray" },
              { href: "/blogs", label: "Blogs" },
              { href: "/culture", label: "Culture Deck" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} passHref>
                <span className="cursor-pointer hover:text-[#ffcf00] transition-colors duration-200">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Page Content */}
      <main className="flex-grow bg-white text-black px-6 py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 mt-10">
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#ffde59] font-semibold">Eureka Craft</span> ·
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}
