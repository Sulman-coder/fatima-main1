import AboutLayout from "../../components/AboutLayout";

export default function LeadershipPage() {
  return (
     <AboutLayout title="Leadership" currentPage="Leadership">
       {/* Hero Section */}
      <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
               
                     <Image
       src="/images/about-us-hero.png"
       alt="Education Banner"
       fill
       className="object-cover"
     />
     
              
             {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" /> */}
             <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0" />
     
             <h1 className="relative z-10 text-3xl md:text-5xl font-bold">
               Leadership
             </h1>
           </section>
      {/* You can also pass children here if you want */}
    </AboutLayout>
  );
}
