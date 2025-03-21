import { sections } from "@config";
import { SectionHead } from "@ui";

export default function Home() {
  return (
    <main>
      {sections.map(({ id, name, isCentered, component: Component }, index) => (
        <div key={id} id={id}>
          <section id={id} className="max-w-[900px] mx-auto py-24">
            {index > 0 && (
              <SectionHead name={name} index={index} isCentered={isCentered} />
            )}
            <Component index={index} />
          </section>
        </div>
      ))}
    </main>
  );
}
