import { sections } from "@CONFIG";
import { SectionHead } from "@components";

export default function Home() {
  return (
    <main>
      {sections.map((section, index) => (
        <div key={section.id} id={section.id}>
          <section id={section.id} className="max-w-[900px] mx-auto py-24">
            {index > 0 && (
              <SectionHead
                name={section.name}
                index={index}
                isContact={section.id === "contact"}
              />
            )}
            <section.component index={index} />
          </section>
        </div>
      ))}
    </main>
  );
}
