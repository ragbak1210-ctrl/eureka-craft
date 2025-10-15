import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-golden">Eureka Craft</h1>
          <div className="space-x-6">
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
              <Link key={href} href={href}>
                <span className="nav-link cursor-pointer">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="footer">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Eureka Craft · All rights reserved.
        </p>
      </footer>
    </div>
  );
}
