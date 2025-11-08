// src/app/components/TimelineItem.jsx
export default function TimelineItem({ year, title, description, achievements = [], isLast = false }) {
  return (
    <div className="relative" data-testid={`timeline-item-${year || "unknown"}`}>
      <div className="flex gap-6 flex-1">
        <div className="flex flex-col items-center relative shrink-0">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0 z-10"
            data-testid={`timeline-year-badge-${year || "unknown"}`}
          >
            {year ? year.slice(-2) : "--"}
          </div>

          {!isLast && (
            <div
              className="absolute top-10 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-border"
              data-testid="timeline-connector"
            />
          )}
        </div>

        <div className="flex-1 pb-12">
          <div
            className="bg-card rounded-xl p-6 shadow-sm border border-card-border"
            data-testid={`timeline-card-${year || "unknown"}`}
          >
            <h2 className="text-3xl font-bold text-foreground mb-2">{year || "--"}</h2>
            <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>

            {achievements.length > 0 && (
              <ul className="space-y-0">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground relative">
                    <div className="flex flex-col items-center shrink-0 pt-1.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {idx < achievements.length - 1 && <div className="w-[1px] h-full bg-border mt-1" />}
                    </div>
                    <span className="flex-1 leading-relaxed pb-3">{achievement}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}




















































// export default function TimelineItem({ year, title, description, achievements, isLast = false, index }) {
//   return (
//     <div className="relative" data-testid={`timeline-item-${year}`}>
//       <div className="flex gap-6 flex-1">
//         <div className="flex flex-col items-center relative shrink-0">
//           <div
//             className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0 z-10"
//             data-testid={`timeline-year-badge-${year}`}
//           >
//             {year.slice(-2)}
//           </div>

//           {!isLast && (
//             <div
//               className="absolute top-10 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-border"
//               data-testid="timeline-connector"
//             />
//           )}
//         </div>

//         <div className="flex-1 pb-12">
//           <div
//             className="bg-card rounded-xl p-6 shadow-sm border border-card-border"
//             data-testid={`timeline-card-${year}`}
//           >
//             <h2
//               className="text-3xl font-bold text-foreground mb-2"
//               data-testid={`timeline-year-${year}`}
//             >
//               {year}
//             </h2>

//             <h3
//               className="text-lg font-semibold text-foreground mb-3"
//               data-testid={`timeline-title-${year}`}
//             >
//               {title}
//             </h3>

//             <p
//               className="text-sm text-muted-foreground leading-relaxed mb-4"
//               data-testid={`timeline-description-${year}`}
//             >
//               {description}
//             </p>

//             {achievements.length > 0 && (
//               <ul
//                 className="space-y-0"
//                 data-testid={`timeline-achievements-${year}`}
//               >
//                 {achievements.map((achievement, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-start gap-3 text-sm text-muted-foreground relative"
//                     data-testid={`timeline-achievement-${year}-${idx}`}
//                   >
//                     <div className="flex flex-col items-center shrink-0 pt-1.5">
//                       <div className="w-2 h-2 rounded-full bg-primary" />
//                       {idx < achievements.length - 1 && (
//                         <div className="w-[1px] h-full bg-border mt-1" />
//                       )}
//                     </div>
//                     <span className="flex-1 leading-relaxed pb-3">
//                       {achievement}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// export default function TimelineItem({ year, title, description, achievements = [], isLast = false, index }) {
//   return (
//     <div className="relative" data-testid={`timeline-item-${year}`}>
//       <div className="flex gap-6 flex-1">
//         <div className="flex flex-col items-center relative shrink-0">
//           <div
//             className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0 z-10"
//             data-testid={`timeline-year-badge-${year}`}
//           >
//             {year ? year.slice(-2) : "--"}
//           </div>

//           {!isLast && (
//             <div
//               className="absolute top-10 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-border"
//               data-testid="timeline-connector"
//             />
//           )}
//         </div>

//         <div className="flex-1 pb-12">
//           <div
//             className="bg-card rounded-xl p-6 shadow-sm border border-card-border"
//             data-testid={`timeline-card-${year}`}
//           >
//             <h2 className="text-3xl font-bold text-foreground mb-2" data-testid={`timeline-year-${year}`}>
//               {year || "--"}
//             </h2>

//             <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`timeline-title-${year}`}>
//               {title}
//             </h3>

//             <p className="text-sm text-muted-foreground leading-relaxed mb-4" data-testid={`timeline-description-${year}`}>
//               {description}
//             </p>

//             {Array.isArray(achievements) && achievements.length > 0 && (
//               <ul className="space-y-0" data-testid={`timeline-achievements-${year}`}>
//                 {achievements.map((achievement, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-start gap-3 text-sm text-muted-foreground relative"
//                     data-testid={`timeline-achievement-${year}-${idx}`}
//                   >
//                     <div className="flex flex-col items-center shrink-0 pt-1.5">
//                       <div className="w-2 h-2 rounded-full bg-primary" />
//                       {idx < achievements.length - 1 && <div className="w-[1px] h-full bg-border mt-1" />}
//                     </div>
//                     <span className="flex-1 leading-relaxed pb-3">{achievement}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

