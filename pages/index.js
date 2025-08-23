// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-yellow-50 to-orange-100">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Eureka Craft —{" "}
          <span className="text-orange-600">Where Boring Brands Become Unforgettable</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl">
          Brand Strategy | Content Systems | LinkedIn Growth <br />
          We turn founders into magnets and content into pipelines.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/services" className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            Explore Our Services
            
          </Link>
          <Link href="/clarity-xray" className="px-6 py-3 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-white">
            Book The Clarity X-Ray™
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">About Eureka Craft</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We don’t do fluff. We don’t do fake growth. We help high-trust, founder-led brands
          get sharp, sound human, and show up with strategy. Whether you’re a coach, consultant,
          creative, or founder—we turn POV into positioning, and positioning into pipelines.
        </p>
        <Link href="/about" className="mt-6 inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
          Learn More
        </Link>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="font-semibold text-xl text-orange-600">LinkedIn Ghostwriting</h3>
              <p className="mt-3 text-gray-700">
                Narrative-led personal branding for founders. Ghostwritten posts, carousels, and videos aligned with your voice.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="font-semibold text-xl text-orange-600">Brand Voice + Strategy</h3>
              <p className="mt-3 text-gray-700">
                Decode your founder voice, define tone guides, and craft messaging IP that compounds across platforms.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="font-semibold text-xl text-orange-600">The Clarity X-Ray™</h3>
              <p className="mt-3 text-gray-700">
                Our proprietary diagnostic that surfaces blindspots in positioning, narrative, and offers. Because what you can’t see is what’s holding you back.
              </p>
            </div>
          </div>
          <Link href="/services" className="mt-10 inline-block px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            View All Services
          </Link>
        </div>
      </section>

      {/* Client Wins */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Client Wins</h2>
        <ul className="space-y-6 text-lg text-gray-700">
          <li>✨ 6x DM Conversions in 60 Days for a BFSI Founder</li>
          <li>🚀 30% Revenue Growth in 100 Days (SaaS)</li>
          <li>💡 Ghostwritten POV campaigns that led to 3 investor calls in 2 weeks</li>
          <li>🎯 800+ Decision Makers Reached Monthly via Smart Outreach</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Let’s Build Your Brand with Brains & Boldness</h2>
        <p className="text-lg mb-8">
          No templates. No fluff. Just narrative systems that convert.
        </p>
        <Link href="/contact" className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100">
          Contact Us
        </Link>
      </section>
    </main>
  );
}
