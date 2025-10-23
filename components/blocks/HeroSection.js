import { motion } from "framer-motion";

export default function HeroSection({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="relative text-center py-24 px-6 bg-gradient-to-br from-[#fffef3] to-[#fffae0]">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-extrabold text-black leading-tight"
      >
        {title.split(" ").map((word, i) => (
          <span
            key={i}
            className={i % 2 ? "text-[#ffcf00]" : "text-black"}
          >
            {word + " "}
          </span>
        ))}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mt-6"
        >
          {subtitle}
        </motion.p>
      )}

      {ctaText && (
        <motion.a
          href={ctaLink}
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-10 px-8 py-3 bg-black text-white font-semibold rounded-md hover:bg-[#ffcf00] hover:text-black transition"
        >
          {ctaText}
        </motion.a>
      )}
    </section>
  );
}
