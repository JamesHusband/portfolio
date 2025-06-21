"use client";

import { List, FramedImage } from "@ui";
import { Text } from "@UI";
import { SectionHead } from "@ui";
import { PageTransition } from "../../lib/utils/PageTransition";
import persona from "../../data/persona.json";

export default function AboutPage() {
  return (
    <PageTransition>
      <main>
        <section className="max-w-[900px] mx-auto py-24">
          <SectionHead name="About" index={1} />
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-3 space-y-8">
              <Text>
                Here to leverage the latest in web tech to solve real-world
                problems and create something truly awesome. Let us build
                something amazing together!
              </Text>

              <Text className="mb-4">
                Here are a few technologies I&apos;ve been working with recently
              </Text>

              <List items={persona.technologies} variant="bullet" layout="flow" />
            </div>

            <div className="md:col-span-2 flex justify-center md:justify-end">
              <FramedImage src="/me.webp" alt="Profile photo" priority />
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
