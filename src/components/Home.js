import { NavLink, useLocation, useParams } from "react-router-dom";
import "./Home.css";
import { useState, useEffect } from "react";
import sanityClient from "../client.js";
import SmallCard from "./SmallCard.js";
import MedCard from "./MedCard.js";
import LargeCard from "./LargeCard.js";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
export default function Home() {
  const [postData, setPost] = useState(null);
  const location = useLocation();
  const { category } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(_createdAt desc) {
            title,
            slug,
            author->{
              name
            },
            description,
            fplarge,
            fpsmall,
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
  const frontPageLarge = postData.find((post) => post.fplarge);
  return (
    <Container sx={{ marginTop: "20px" }}>
      <Typography variant="h4">Front Page</Typography>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          {(() => {
            if (frontPageLarge) {
              return (
                <LargeCard
                  author={frontPageLarge.author}
                  description={frontPageLarge.description}
                  image={frontPageLarge.mainImage}
                  title={frontPageLarge.title}
                />
              );
            }
          })()}

          {/* <NavLink
      to={location.pathname + "/" + post.slug.current}
      key={post.slug.current}
    >
      Hello
    </NavLink> */}
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2} sx={{ height: "100%" }}>
            {postData &&
              postData.map((post) => {
                if (post.fpsmall) {
                  return (
                    <SmallCard
                      description={post.description}
                      title={post.title}
                    />
                  );
                }
              })}
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ minHeight: "100vh", paddingBottom: "20px" }}>
          <Typography variant="h4">More Articles</Typography>

          <Stack spacing={2}>
            {postData &&
              postData.slice(0, 4).map((post) => {
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
        </Grid>
      </Grid>
    </Container>
  );
}
