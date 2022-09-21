import "./Card.css"
import photo from "./baseball-player.png"

const Card = ({name, title, description}) =>{
    return(
      <div className="Card">
        <div className="card_img_container">
          <img src={photo}/>
        </div>
        <div className="card_content_container">
          <h3>{name}</h3>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
  
      </div>
    );
  }

export default Card;