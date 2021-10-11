import { NavLink, useLocation, useParams } from "react-router-dom";
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
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(_createdAt desc) {
            title,
            slug,
            author->{
              name,
              image{
              asset->{
                _id,
                url
              }
            }
            },
            description,
            fplarge,
            fpsmall,
            categories[0]->{title},
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
  });
  if (!postData) {
    return <div>Loading...</div>;
  }
  const frontPageLarge = postData.find((post) => post.fplarge);
  return (
    <Container sx={{ marginTop: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "10px" }}>
        Front Page
      </Typography>
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
                  category={frontPageLarge.categories.title.toLowerCase()}
                  slug={frontPageLarge.slug.current}
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
                      category={post.categories.title.toLowerCase()}
                      slug={post.slug.current}
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
                    homeStart="section/"
                    category={post.categories.title.toLowerCase()}
                    slug={post.slug.current}
                  />
                );
              })}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
