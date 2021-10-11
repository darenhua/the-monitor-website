import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

export default function SectionCard(props) {
  return (
    <Card sx={{ maxWidth: "100%", height: "100%" }}>
      <CardActionArea sx={{ height: "100%" }}>
        <NavLink
          to={"section/" + props.category + "/" + props.slug}
          key={props.slug}
          style={{ textDecoration: "none" }}
        >
          <CardContent>
            <Typography gutterBottom color="black" variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </NavLink>
      </CardActionArea>
    </Card>
  );
}
