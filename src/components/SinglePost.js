import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import sanityClient from "../client.js";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import BlockContent from "@sanity/block-content-to-react";
import Disqus from "disqus-react";
import "./Disqus.css";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();
  const location = useLocation();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            author->{
                name,
                image{
                asset->{
                  _id,
                  url
                }
              }
              },
              body
        }`
      )
      .then((data) => {
        setSinglePost(data);
      })
      .catch(console.error);
  }, [slug]);
  if (!singlePost) {
    return <div>Loading...</div>;
  }
  const disqusShortname = "daren-hua";
  const disqusConfig = {
    url: "http://localhost:3000" + location.pathname,
    identifier: slug,
    title: "Title of Your Article",
  };
  return (
    <div>
      <Container sx={{ paddingBottom: "20px", width: "50%" }}>
        <Typography sx={{ margin: "20px 0" }} variant="h3">
          {singlePost[0].title}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Avatar src={singlePost[0].author.image.asset.url} />
          <Box ml={2}>
            <Typography color="black" variant="subtitle2" component="p">
              {singlePost[0].author.name}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              May 14, 2020
            </Typography>
          </Box>
        </Box>

        <BlockContent
          blocks={singlePost[0].body}
          projectId="24dj3qr3"
          dataset="production"
          // Custom serializers for marks, blocks
          imageOptions={{ w: 420, h: 300, fit: "max" }}
        />
      </Container>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
}
