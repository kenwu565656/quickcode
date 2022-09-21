import ContentCard from "./ContentCard";
import { React, useState} from "react";
import "./ContentList.css";

const ContentList = ({data, setPage, searchValue, setSearchValue, setSearchChange, currentPage, setCurrentPage, haveMore}) => {

    
    const handleChangeSearchValue = (e) => {
        let value = e.target.value;
        setSearchValue(value);
    }

    const handleSearchButton = (e) => {
        localStorage.setItem("currentPage", 1);
        setCurrentPage(1);
        localStorage.setItem("search", searchValue);
        setSearchChange(searchValue);
        
    }

    const handleLoadMore = (e) => {
        localStorage.setItem("currentPage", currentPage + 1);
        setCurrentPage(currentPage + 1);
        
    }

    return (
        <div className="contentList_container">
            <div className="SearchBar_container">
                <input placeholder="Search for some article" className="SearchBar" value={searchValue} onChange={(e) => handleChangeSearchValue(e)}></input>
                <button className="search_button" onClick={(e) => handleSearchButton(e)}>Search</button>
            </div>
            
            {
                data.map((post, key) => {
                    return (
                        <ContentCard title = {post.title} tags = {post.tags} key={key} setPage={setPage} index={key} id ={post._id}/>
                    )
                })
            }

            {
                haveMore && <button onClick={(e) => handleLoadMore(e)} className="load_more_button">Load More</button>
            }
            
        </div>
    )

}

export default ContentList;