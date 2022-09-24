import Card from "./Card"
import Content from "./Content"
import Tag from "./Tag"
import React, { useState, useEffect } from "react";
import ContentList from "./ContentList";
import "./Main.css";
import axios from "axios";
import { total_filter, owner } from "./data";

const Main = () =>{

  const [currentPage, setCurrentPage] = useState(localStorage.getItem("currentPage") || 1);
  const [haveMore, setHaveMore] = useState(false);
  const [searchValue, setSearchValue] = useState(localStorage.getItem("search") || "");
  const [filter, setFilter] = useState(JSON.parse(localStorage.getItem("filter")) || []);
  const [post, setPost] = useState([]);
  const [searchChange, setSearchChange] = useState("");
  const [loadingPosts, setLoadingPosts] = useState(false);

  useEffect(() => {
      setLoadingPosts(true);
      axios({url: 'http://localhost:3001/loadposts', method: 'post', params: {filter: JSON.stringify(filter), search: searchValue, page: currentPage}}).then((response) => {
          console.log(response);
          setLoadingPosts(false);
          setPost(response.data.data);
          setHaveMore(response.data.length > response.data.data.length? true : false);
          console.log(filter);
        });
      }
  , [filter, searchChange, currentPage]);

        return(
        <div className="main_container">
        <Card {...owner} />
        <ContentList data = {post} searchValue = {searchValue} setSearchValue = {setSearchValue} setSearchChange = {setSearchChange} currentPage = {currentPage}
        setCurrentPage = {setCurrentPage} haveMore = {haveMore} loadingPosts = {loadingPosts}/>
        <Tag filter = {filter} setFilter = { setFilter } total_filter={total_filter} currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>
      </div>)
      
    
    
  }

export default Main;