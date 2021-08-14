import React from "react";
import Page from "../../components/Page";
import "./Portfolio.scss";
import ProjectList from "../../components/ProjectList";
export default function Portfolio() {
  return (
    <Page
      heading="Portfolio"
      subHeading="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
    >
      <ProjectList />
    </Page>
  );
}
