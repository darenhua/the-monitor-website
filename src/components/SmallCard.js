import Box from "@mui/material/Box";

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
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
