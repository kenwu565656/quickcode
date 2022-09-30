import React from "react";
import "./Content.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BarLoader from "react-spinners/BarLoader";

const Content = () =>{

    const link = process.env.REACT_APP_MyConnectionString || 'http://localhost:3001';
    const {id} = useParams();
    const [content, setContent] = useState([]);
    const [loadingSinglePost, setloadingSinglePost] = useState(false);
    const override = {
        display: "block",
        margin: "0 auto 10px",
      };


    useEffect(() => {
        setloadingSinglePost(true);
        axios({url: link + '/loadpost/' + id, method: 'get'}).then((response) => {
          console.log(response.data);
          setloadingSinglePost(false);
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
            <BarLoader loading={loadingSinglePost} cssOverride={override} width={"100%"} height={10} color={"#013220"}/>
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