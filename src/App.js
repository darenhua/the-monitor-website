import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import SinglePost from "./components/SinglePost.js";
import Section from "./components/Section.js";
import NavBar from "./components/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={Home} path="/" exact />
          {/* <Route component={About} path="/about"/> */}
          <Route component={SinglePost} path="/section/:category/:slug" />
          {/* <Route component={Post} path="/post"/> */}
          <Route component={Section} path="/section/:category" />
          {/* <Route component={Section} path="/section"/> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
