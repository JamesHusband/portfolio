"use client";

import { Button } from "@UI";
import { SectionHead } from "@ui";
import { PageTransition } from "../../lib/utils/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <main>
        <section className="max-w-[900px] mx-auto py-24">
          <SectionHead name="Contact" index={4} isCentered />
          <div className="max-w-[600px] mx-auto flex flex-col items-center">
            <p className="text-slate text-lg leading-relaxed mb-12 md:text-base">
              I&apos;m currently looking for new opportunities. Interest in
              hybrid / remote positions
            </p>
            <Button value="Say Hello" href="mailto:hello@jameshdev.com" />
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
