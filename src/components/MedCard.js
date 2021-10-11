import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function SectionCard(props) {
  console.log(props);
  return (
    <Card sx={{ maxWidth: "100%", margin: "10px 0" }}>
      <CardActionArea sx={{ display: "flex", justifyContent: "flex-start" }}>
        <CardMedia
          sx={{ width: "15%", height: "100px" }}
          image={props.image.asset.url}
          title="Contemplative Reptile"
          component="img"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            sx={{ maxHeight: "30px", textOverflow: "ellipsis" }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
