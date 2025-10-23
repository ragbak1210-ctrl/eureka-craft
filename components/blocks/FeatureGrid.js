export default function FeatureGrid({ features }) {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-10">
      {features.map((f, i) => (
        <div
          key={i}
          className="p-8 bg-white border border-[#ffde59]/30 rounded-xl shadow-sm hover:shadow-xl transition-all"
        >
          <h3 className="text-2xl font-bold mb-3 text-[#000000]">{f.title}</h3>
          <p className="text-gray-700">{f.description}</p>
        </div>
      ))}
    </section>
  );
}
