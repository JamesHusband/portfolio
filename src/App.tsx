import React from "react";
import { hot } from "react-hot-loader/root";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import registerIcons from "./registerIcons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Homepage from "./pages/Homepage";
registerIcons();

export const App = hot(_App);
export function _App(): JSX.Element | null {
  return (
    <>
      <Router>
        <Header />

        <main id="main">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </>
  );
}
