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
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: "260px" }}
          image={props.image.asset.url}
          title="Contemplative Reptile"
        />
        <CardActions
          sx={{
            display: "flex",
            margin: "0 10px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                {props.author.name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                May 14, 2020
              </Typography>
            </Box>
          </Box>
        </CardActions>

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
