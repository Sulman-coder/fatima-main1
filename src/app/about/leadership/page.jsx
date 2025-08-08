import AboutLayout from "../../../components/AboutLayout";

export default function LeadershipPage() {
  return (
     <AboutLayout title="Leadership" currentPage="Leadership">
       {/* Hero Section */}
        <section className="relative w-full md:h-screen h-[60vh]">
        <img
          src="/images/about.jpeg"
          alt="Banner Image"
          // className="absolute top-0 left-0 w-full h- object-cover opacity-60"
           className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold">
          Leadership
        </h1>
      </section>
      {/* You can also pass children here if you want */}
    </AboutLayout>
  );
}
