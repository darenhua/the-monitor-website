import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();
    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            body
        }`)
        .then((data) => {setSinglePost(data)})
        .catch(console.error)
    }, [slug])
    if (!singlePost){
        return <div>Loading...</div>
    } 
    return (
        <div>
            <BlockContent blocks={singlePost[0].body} projectId="24dj3qr3" dataset="production"/>
        </div>
    )
};