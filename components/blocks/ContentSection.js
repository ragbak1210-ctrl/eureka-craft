export default function ContentSection({ title, text, image, reverse }) {
  return (
    <section
      className={`flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto py-20 px-6 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 space-y-4">
        <h2 className="text-4xl font-extrabold text-[#000000]">
          <span className="text-[#ffcf00]">{title}</span>
        </h2>
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </div>
      {image && (
        <img
          src={image}
          alt={title}
          className="flex-1 rounded-xl shadow-lg hover:scale-105 transition-transform"
        />
      )}
    </section>
  );
}
