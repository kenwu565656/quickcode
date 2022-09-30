import ContentCard from "./ContentCard";
import { React, useState} from "react";
import "./ContentList.css";
import BarLoader from "react-spinners/BarLoader"

const ContentList = ({data, setPage, searchValue, setSearchValue, setSearchChange, currentPage, setCurrentPage, haveMore, loadingPosts}) => {

    const override = {
        display: "block",
        margin: "0 auto 10px",
      };

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
        <div>

{
    <BarLoader loading={loadingPosts} cssOverride={override} width={"100%"} height={10} color={"#013220"}/>
}

          </div>
            <div className="SearchBar_container">
                <input placeholder="Search for articles" className="SearchBar" value={searchValue} onChange={(e) => handleChangeSearchValue(e)}></input>
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

            {
                (data.length == 0 && !loadingPosts) && <h4>No result</h4>
            }
            
        </div>
    )

}

export default ContentList;