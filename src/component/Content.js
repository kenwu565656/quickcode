import React from "react";
import "./Content.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Content = () =>{

    const {id} = useParams();
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios({url: 'http://localhost:3001/loadpost/' + id, method: 'get'}).then((response) => {
          console.log(response.data);
          setContent(response.data[0].body);
          window.scrollTo(0, 0)
          console.log(content);
        });
      }
  , [])

    const toCode = (code, key) =>{
        return <code key={key}>{code}</code>;
    };
    const toHeader = (header, key) => <h1 key={key}>{header}</h1>;
    const toPara = (para, key) => <p key={key}>{para}</p>;
    //const toImg = (img) => <img></img>;

    return(
        <div className="content_container">
            <div className="shadow">
        {
        content.map((content, i) => {
            switch(content.type){
                case "code":
                    return(toCode(content.main, i));
                case "header":
                    return(toHeader(content.main, i));
                case "para":
                    return(toPara(content.main, i));
                default:
                    return(toPara(content.main, i));
            }
        })
        }
        </div>
    </div>
    );
}

export default Content