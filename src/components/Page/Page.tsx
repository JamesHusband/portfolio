import React from "react";
import { Container } from "react-bootstrap";
import "./page.scss";

export interface ISectionTitle {
  heading: string;
  subHeading: string;
}

export interface IPage {
  children: any;
  heading?: string | undefined;
  subHeading?: string | undefined;
}

const SectionTitle: React.FC<ISectionTitle> = ({ heading, subHeading }) => {
  return (
    <div className="section-title">
      <h2>{heading}</h2>
      <p>{subHeading}</p>
    </div>
  );
};

const Page: React.FC<IPage> = ({ children, heading, subHeading }) => {
  return (
    <section>
      <Container>
        {heading && subHeading && (
          <SectionTitle heading={heading} subHeading={subHeading} />
        )}
        {children}
      </Container>
    </section>
  );
};

export default Page;
