import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import sanityClient from "../client.js";

export default function NavBar() {
    const refContainer = useRef(null);
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "category"]{
                title
            }
            `)
            .then((data) => refContainer.current = data)
            .catch(console.error)
    }, []);
    console.log(refContainer.current);
    return (
        <header>
            <div>
                <nav>
                    <Link to="/">
                        HOME
                    </Link>
                    {refContainer.current && refContainer.current.map((category) => {
                        return (
                            <Link to={"/section/" + category.title.toLowerCase()}>
                                {category.title}
                            </Link>
                        )
                    })}
                    {/* <Link to="/section/politics">
                        Politics
                    </Link>
                    <Link to="/section/campaigns">
                        Campaigns
                    </Link>
                    <Link to="/section/elections">
                        Elections
                    </Link>
                    <Link to="/section/covid">
                        Coronavirus
                    </Link>
                    <Link to="/section/activism">
                        Activism
                    </Link> */}
                </nav>
            </div>
        </header>
    )
};