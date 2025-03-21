"use client";

import { List, Tabs } from "@ui";
import { SectionHead } from "@ui";
import { PageTransition } from "../../lib/utils/PageTransition";

type Job = {
  company: string;
  title: string;
  url?: string;
  date: string;
  points: string[];
};

const jobs: Job[] = [
  {
    company: "Little Star Media",
    title: "Senior Developer",
    date: "May 2014 - March 2025",
    points: [
      "Deliver high-quality, robust production code for a diverse array of projects for fast paced affiliate marketing company",
    ],
  },
  {
    company: "JH Web Design",
    title: "Freelance Web Designer",
    date: "Jan 2012 - March 2024",
    points: [
      "Deliver high-quality, robust production code for a diverse array of projects for fast paced affiliate marketing company",
    ],
  },
];

export default function ExperiencePage() {
  const tabs = jobs.map((job) => ({
    id: job.company.toLowerCase().replace(/\s+/g, "-"),
    label: job.company,
    content: (
      <div className="min-h-[340px]">
        <h3 className="text-xl text-slate-light font-medium mb-1">
          {job.title}{" "}
          <span className="text-yellow">
            @{" "}
            <a href={job.url} className="inline-link hover:underline">
              {job.company}
            </a>
          </span>
        </h3>
        <p className="font-mono text-sm text-slate mb-4">{job.date}</p>
        <List items={job.points} variant="bullet" layout="stack" />
      </div>
    ),
  }));

  return (
    <PageTransition>
      <main>
        <section className="max-w-[900px] mx-auto py-24">
          <SectionHead name="Experience" index={2} />
          <Tabs tabs={tabs} orientation="vertical" />
        </section>
      </main>
    </PageTransition>
  );
}
