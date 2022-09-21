import React from "react";
import messy_code from "./messy_code_part.PNG";
import './Home.css';
import framework_photo from "./framework.PNG";
import post_photo from "./a_lot_post.PNG";
import tag_photo from "./a_lot_of_tags.PNG"
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div className="home_container">
            <h3>Have you being sucks with syntax error ?</h3>
            <img src={messy_code} className={"long_photo"}></img>
            <h3>Here is the right place to come</h3>
            <Link className="logo_link" to={"./posts"}><h1><span className="red_word">Q</span>uick<span className="green_word">Code</span></h1></Link>
            <div className="home_row">
                
                <h3>100+ tech articles</h3>
                <div className="image_box">
                <img src={post_photo}></img>
                </div>
                
            </div>
            <div className="home_row">
                <h3>5+ framworks and language covered</h3>
                <div className="image_box">
                <img src={framework_photo}></img>
                </div>
                

            </div>
            <div className="home_row">
                
                <h3>Find your article with search engine and filter quickly</h3>
                <div className="image_box">
                <img src={tag_photo}></img>
                </div>
                
            </div>

            <h1>Let's <Link className="logo_link big" to={"./posts"}><span className="red_word">Q</span>uick<span className="green_word">Code</span></Link></h1>
            

        </div>
    )
};

export default Home;