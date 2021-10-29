import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import ReactGA from "react-ga";
import sanityClient from "../client.js";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "@fontsource/roboto/500.css";

export default function NavBar() {
  const refContainer = useRef(null);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    sanityClient
      .fetch(
        `*[_type == "category"]{
                title
            }
            `
      )
      .then((data) => (refContainer.current = data))
      .catch(console.error);
  }, []);
  console.log(refContainer.current);
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar style={{ justifyContent: "space-evenly" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/section/politics"
            >
              <Button color="inherit">Politics</Button>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/section/campaigns"
            >
              <Button color="inherit">Campaigns</Button>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/section/elections"
            >
              <Button color="inherit">Elections</Button>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/section/covid"
            >
              <Button color="inherit">Covid</Button>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/section/activism"
            >
              <Button color="inherit">Activism</Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </header>
  );
}

{
  /* {refContainer.current && refContainer.current.map((category) => {
    return (
        <Link to={"/section/" + category.title.toLowerCase()}>
            {category.title}
        </Link>
    )
})} */
}
