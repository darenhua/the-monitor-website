import { NavLink, useLocation, useParams } from "react-router-dom";
import "./Home.css";
import { useState, useEffect } from "react";
import sanityClient from "../client.js";
import MedCard from "./MedCard.js";
import LargeCard from "./LargeCard.js";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

export default function Post() {
  const [postData, setPost] = useState(null);
  const { category } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && lower(categories[0]->title) == "${category}"]{
                title,
                slug,
                author,
                description,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, [category]);
  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
        {category}
      </Typography>
      <Stack sx={{ minHeight: "100vh" }}>
        {postData &&
          postData.map((post) => {
            return (
              <MedCard
                author={post.author}
                description={post.description}
                image={post.mainImage}
                title={post.title}
              />
            );
          })}
      </Stack>
    </Container>
  );
}
