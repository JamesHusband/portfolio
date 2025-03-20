"use client";

import { Button } from "@UI";

export function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col px-6 py-24 mx-auto text-center"
    >
      <div className="max-w-[600px] mx-auto flex flex-col items-center">
        <p className="text-slate text-lg leading-relaxed mb-12 md:text-base">
          I&apos;m currently looking for new opportunities. Interest in hybrid /
          remote positions
        </p>
        <Button value="Say Hello" href="mailto:hello@jameshdev.com" />
      </div>
    </section>
  );
}
