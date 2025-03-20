import { sections } from "@CONFIG";

export default function Home() {
  return (
    <main>
      {sections.map((section) => (
        <div key={section.id} id={section.id}>
          <section.component />
        </div>
      ))}
    </main>
  );
}
