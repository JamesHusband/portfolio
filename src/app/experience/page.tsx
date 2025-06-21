"use client";

import { List, Tabs } from "@ui";
import { SectionHead } from "@ui";
import { PageTransition } from "../../lib/utils/PageTransition";
import jobs from "../../data/jobs.json";


type Job = {
  company: string;
  title: string;
  url?: string;
  date: string;
  points: string[];
};


const ExperiencePage = () => {
  const tabs = jobs.map((job: Job) => ({
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

export default ExperiencePage;