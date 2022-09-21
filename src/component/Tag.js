import React, { useState } from "react";
import "./Tag.css"

const Tag = ({ filter, setFilter, total_filter, setCurrentPage} ) =>{

    const [search, setSearch] = useState("");

    const handleOnclick = (e) => {
        let target = e.currentTarget.textContent;
        if (filter.includes(target)){
            return;
        }

        localStorage.setItem("filter", JSON.stringify([...filter, target]));
        setFilter([...filter, target]);
        
        localStorage.setItem("currentPage", 1);
        setCurrentPage(1);
        
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    const deleteFilter = (index) =>{
        localStorage.setItem("filter", JSON.stringify(filter.filter((_, i) => i !== index)));
        setFilter(filter.filter((_, i) => i !== index))
        localStorage.setItem("currentPage", 1);
        setCurrentPage(1);
        
    }


    return(
        <div className="tag_container">
            <h6>Tags</h6>
            <div className="selected_tag_container">
                {filter.map((item, key) => {
                    //return <div key = {key}><span>{item}</span><span value={item} onClick={() => deleteFilter(key)}>x</span></div>;
                    return <span key = {key} className="outer_span">{item}<span value={item} onClick={() => deleteFilter(key)} className="delete">x</span></span>;
                })}
            </div>
            <input placeholder="filter tags" onChange={handleInputChange}></input>
            <div className="unselected_tag_container">
                {
                    total_filter.map((item, key) => {
                        if(item.includes(search)){return <span key = {key} onClick={handleOnclick} value={item}>{item}</span>;}          
                    })
                }
            </div>
        </div>
    );
}

export default Tag;