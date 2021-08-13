import React from "react";
import { hot } from "react-hot-loader/root";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import registerIcons from "./registerIcons";
import Page from "./components/Page";

registerIcons();

export const App = hot(_App);
export function _App(): JSX.Element | null {
  return (
    <>
      <Header />
      <main id="main">
        <Page />
      </main>
      <Footer />
    </>
  );
}
