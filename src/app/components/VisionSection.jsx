// src/app/components/VisionSection.jsx
export default function VisionSection({ title, description, visionPoints = [] }) {
  return (
    <section className="px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {visionPoints.length > 0 && (
          <ul className="list-disc list-inside space-y-2">
            {visionPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
      );
}