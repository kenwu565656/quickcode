import React from "react";
import "./ContentCard.css";
import { Link } from "react-router-dom";


const ContentCard = ( {title, tags, setPage, index, id} ) => {
    return(
        <div className="content_card">
            <Link to={"/posts/" + id}><h3>{title}</h3></Link>
            <div className="content_card_tag_row">
            {
                tags.map((tag, key) => {
                    return (
                        <span key = {key}>{tag}</span>
                    )
                })
            }
            </div>
        </div>

    );
}

export default ContentCard;