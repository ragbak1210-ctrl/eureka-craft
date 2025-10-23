export default function CTASection({ headline, subtext, button }) {
  return (
    <section className="text-center py-24 px-6 bg-gradient-to-r from-[#ffcf00] to-[#ffde59] text-black">
      <h2 className="text-4xl font-bold mb-4">{headline}</h2>
      <p className="text-lg text-gray-800 mb-8">{subtext}</p>
      <a
        href={button.link}
        className="inline-block bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black border border-black transition"
      >
        {button.text}
      </a>
    </section>
  );
}
