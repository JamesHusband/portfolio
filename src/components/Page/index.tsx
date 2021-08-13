import { Counter } from "../Counter";
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
export default function Page() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle
          heading="About"
          subHeading="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas."
        />

        <div className="row">
          <div className="col-lg-4 aos-init aos-animate" data-aos="fade-right">
            <img
              src="https://via.placeholder.com/489x489"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate"
            data-aos="fade-left"
          >
            <h3>Full Stack Web Developer</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>30</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>Master</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>PhEmailone:</strong> <span>email@example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
        <Counter />
      </div>
    </section>
  );
}
