"use client";

import { CaretList, FramedImage } from "@components";
import { Text } from "@UI";

const technologies = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Eleventy",
  "Node.js",
  "WordPress",
];

export function About() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
      <div className="md:col-span-3 space-y-8">
        <Text>
          Here to leverage the latest in web tech to solve real-world problems
          and create something truly awesome. Let us build something amazing
          together!
        </Text>

        <Text className="mb-4">
          Here are a few technologies I&apos;ve been working with recently
        </Text>

        <CaretList items={technologies} />
      </div>

      <div className="md:col-span-2 flex justify-center md:justify-end">
        <FramedImage src="/me.webp" alt="Profile photo" priority />
      </div>
    </div>
  );
}
