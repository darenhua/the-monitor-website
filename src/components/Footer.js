import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Footer() {
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="md">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" color="inherit">
            © 2021 Daren Hua
          </Typography>
          <Typography variant="body1" color="inherit">
            XYZ
          </Typography>
          <Button color="inherit">Link</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
