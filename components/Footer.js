// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 text-center py-6 mt-12 border-t border-gray-700">
      <p>© {new Date().getFullYear()} Eureka Craft. All rights reserved.</p>
      <p className="text-sm mt-2">
        Where Boring Brands Become Unforgettable ✨
      </p>
    </footer>
  );
}
