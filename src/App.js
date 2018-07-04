import React from "react";
import { Route } from "react-router";

import ResponsiveContainer from "./ResponsiveContainer/ResponsiveContainer";
import Footer from "./Footer";
import Home from "./mainContent/Home";
import Projects from "./mainContent/Projects";
import Skills from "./mainContent/Skills";
import Contact from "./mainContent/Contact";

import Popup from "./Popup";

import "semantic-ui-css/semantic.min.css";

const App = () => (
  <ResponsiveContainer>
    <Route exact path="/" component={Home} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contact" component={Contact} />
    <Footer />
    <Popup />
  </ResponsiveContainer>
);

export default App;
