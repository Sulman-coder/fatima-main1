import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[55vh] flex items-center justify-center bg-black">
        {/* Background Image */}
        <Image
          src="/images/about-hero.jpg" // Hero image for About page
          alt="About Helix Biogen Institute"
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Overlay Gradient (top to bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>

        {/* Title */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>

        {/* Gradient line below hero image */}
        <div className="absolute bottom-0 w-full h-[5px] bg-gradient-to-r from-orange-400 to-blue-600"></div>
      </section>

      {/* Links Below Hero */}
      <div className="bg-black w-full text-gray-300 text-center py-4">
        <div className="flex justify-center gap-8 text-lg">
          <Link href="/about/overview" className="hover:text-orange-400 transition">Overview</Link>
          <Link href="/about/leadership" className="hover:text-orange-400 transition">Leadership</Link>
          <Link href="/about/history" className="hover:text-orange-400 transition">History</Link>
        </div>
      </div>

      {/* Light Horizontal Line */}
      <div className="h-[2px] bg-gray-200 w-full"></div>

      {/* Placeholder for main About content */}
      <section className="px-6 py-16 max-w-6xl mx-auto text-center">
        <p className="text-gray-700 text-lg">
          This section will have the About content (Overview, Leadership, History).
        </p>
      </section>
    </div>
  );
}

