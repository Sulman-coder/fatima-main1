import Image from "next/image";

export default function HistoryPage() {
  return (
    <div className="bg-white text-gray-800">
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">
            History of Helix Biogen Institute
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Helix Biogen Institute's history is built on a passion for
            innovation and a dedication to advancing the field of biomedical
            science.
          </p>
        </div>
        <div>
          <Image
            src="/images/history.jpg"
            alt="History of Helix Biogen"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>
    </div>
  );
}
