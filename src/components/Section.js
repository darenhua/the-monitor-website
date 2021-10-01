import { NavLink, useLocation, useParams } from "react-router-dom";
import "./Home.css";
import { useState, useEffect } from "react";
import sanityClient from "../client.js";

export default function Post() {
    const [postData, setPost] = useState(null);
    const location = useLocation();
    const { category } = useParams();
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post" && lower(categories[0]->title) == "${category}"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error)
    }, [category]);
    return (
        <div>
            {postData && postData.map((post) => {
                return (
                <div>
                    {post.title}
                    <NavLink to={location.pathname + "/" + post.slug.current} key={post.slug.current}>Hello</NavLink>
                </div>
                )
            })}
        </div>
    )
};