import React from "react";
import "./page.scss";
export interface ISectionTitle {
  heading: string;
  subHeading: string;
}

const SectionTitle: React.FC<ISectionTitle> = ({ heading, subHeading }) => {
  return (
    <div className="section-title">
      <h2>{heading}</h2>
      <p>{subHeading}</p>
    </div>
  );
};
export default function Page({
  children,
  heading,
  subHeading,
}: {
  children: any;
  heading: any;
  subHeading: any;
}) {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle heading={heading} subHeading={subHeading} />
        {children}
      </div>
    </section>
  );
}
