// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#1a1a1a] text-white px-8 py-4 flex items-center justify-between shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide text-green-400">
        Eureka Craft
      </div>

      {/* Menu */}
      <ul className="flex space-x-6 text-lg">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/quiz">Quiz</Link>
        </li>
        <li>
          <Link href="/clarity-xray">Clarity X-Ray</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/culture">Culture Deck</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
