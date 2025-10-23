export default function QuoteBlock({ quote, author }) {
  return (
    <section className="py-20 px-6 bg-[#000000] text-center text-white">
      <p className="text-3xl italic max-w-3xl mx-auto font-shadow text-[#ffcf00]">
        “{quote}”
      </p>
      {author && <p className="mt-4 text-gray-400">— {author}</p>}
    </section>
  );
}
