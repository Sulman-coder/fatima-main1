//  import React from "react";
import TimelineItem from "../../TimelineItem";
import VisionSection from "../../VisionSection";

export default function HelixBiogenPage() {
  const timelineData = [
    {
      year: "2019",
      title: "Founding of Helix Biogen Consult",
      description:
        "Helix Biogen Consult was established in late 2019 as a consultancy firm providing expert services in biomedical research, diagnostics, and biotechnology solutions. Its focus was on guiding research projects, offering laboratory diagnostics training, and consulting for healthcare providers on infectious disease management.",
      achievements: [
        "Delivering hands-on training in molecular biology techniques",
        "Collaborating with academic institutions on laboratory capacity building",
        "Beginning preliminary research on infectious disease diagnostics and vaccine approaches",
      ],
    },
    {
      year: "2020",
      title: "Expansion to Research-Based Projects",
      description:
        "In 2020, Helix Biogen Consult expanded its work from consultancy to applied biomedical research. During the COVID-19 pandemic, the organization began exploring vaccine research and diagnostic solutions. A key milestone was the initiation of a COVID-19 vaccine candidate designed for African populations, which gained international recognition and was featured by the World Health Organization as part of the global vaccine development landscape.",
      achievements: [],
    },
    {
      year: "2021",
      title: "Transition to a Biomedical Research Institute",
      description:
        "By mid-2021, Helix Biogen Consult evolved into Helix Biogen Institute, reflecting its growing mission as a biomedical research organization. The focus expanded to translational genomics, vaccine development, and point-of-care diagnostic innovation.",
      achievements: [
        "Establishing a research hub in Ogbomoso, Oyo State, Nigeria, focused on emerging and re-emerging diseases",
        "Securing partnerships with academic institutions, public health agencies, and private biotech companies",
        "Building a multidisciplinary team of researchers specializing in biomedical sciences",
      ],
    },
    {
      year: "2022",
      title: "Key Achievements as Helix Biogen Institute",
      description:
        "Since 2022, Helix Biogen Institute has advanced its position as a center for translational biomedical research in Africa.",
      achievements: [
        "Advancing preclinical research on its COVID-19 vaccine candidate",
        "Developing point-of-care diagnostic kits for pathogens prioritized by the Africa CDC",
        "Publishing pioneering studies in computational vaccine design, including mRNA vaccine models targeting vaccinia and Mpox viruses (2024)",
        "Hosting capacity-building programs and masterclasses on science entrepreneurship and laboratory techniques",
        "Partnering with organizations such as the Africa CDC and local public health agencies to strengthen biomedical capacity across the continent",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background" data-testid="home-page">
      <header className="pt-10 pb-8 px-6" data-testid="page-header">
        <div className="max-w-4xl mx-auto pl-12">
          <h1
            className="text-3xl font-bold text-foreground mb-1"
            data-testid="main-title"
          >
            Helix Biogen Institute
          </h1>
          <p
            className="text-sm text-muted-foreground"
            data-testid="main-subtitle"
          >
            Our Journey in Advancing African Biomedical Innovation
          </p>
        </div>
      </header>

      <main className="px-6 pb-8" data-testid="timeline-container">
        <div className="max-w-4xl mx-auto space-y-0">
          {timelineData.map((item, idx) => (
            <TimelineItem
              key={item.year}
              year={item.year}
              title={item.title}
              description={item.description}
              achievements={item.achievements}
              isLast={idx === timelineData.length - 1}
              index={idx}
            />
          ))}
        </div>
      </main>

      <div className="px-6 py-8" data-testid="section-divider">
        <div className="max-w-4xl mx-auto pl-12">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-border to-border" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="w-2 h-2 rounded-full bg-primary/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
            </div>
            <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-border to-border" />
          </div>
        </div>
      </div>

      <VisionSection
        title="The Vision of Helix Biogen Institute"
        description="Today, Helix Biogen Institute stands as a leading African biomedical research hub dedicated to advancing health innovation through science. Its vision is centered on:"
        visionPoints={[
          "Tackling Africa's unique healthcare challenges through innovative diagnostics and vaccines",
          "Building capacity for local biotechnology advancement",
          "Collaborating with global and regional partners to improve public health outcomes",
        ]}
      />

      <footer className="py-10 px-6 bg-background" data-testid="page-footer">
        <div className="max-w-4xl mx-auto pl-12 text-center">
          <p
            className="text-xs text-muted-foreground"
            data-testid="copyright-text"
          >
            © 2025 Helix Biogen Institute. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

 



















    // src/app/about/history/page.jsx
// import TimelineItem from "../../components/TimelineItem";
// import VisionSection from "../../components/VisionSection";

// export default function HistoryPage() {
//   const timelineData = [
//     { year: "2019", title: "Founding", description: "Helix Biogen started", achievements: ["Training", "Collaborating", "Research"] },
//     { year: "2020", title: "Expansion", description: "COVID-19 projects", achievements: [] },
//     { year: "2021", title: "Transition", description: "Helix Biogen Institute", achievements: ["Hub", "Partnerships", "Team"] },
//     { year: "2022", title: "Key Achievements", description: "Advanced research", achievements: ["Preclinical research", "Diagnostics", "Publications"] },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="pt-10 pb-8 px-6">
//         <h1 className="text-3xl font-bold">Helix Biogen Institute</h1>
//         <p className="text-sm text-muted-foreground">Our Journey in Advancing African Biomedical Innovation</p>
//       </header>

//       <main className="px-6 pb-8">
//         {timelineData.map((item, idx) => (
//           <TimelineItem
//             key={item.year || idx}
//             year={item.year}
//             title={item.title}
//             description={item.description}
//             achievements={item.achievements}
//             isLast={idx === timelineData.length - 1}
//           />
//         ))}
//       </main>

//       <VisionSection
//         title="Our Vision"
//         description="Helix Biogen Institute aims to advance health innovation in Africa through science."
//         visionPoints={["Diagnostics", "Local biotech", "Global collaboration"]}
//       />
//     </div>
//   );
// }
