import React, { useState} from "react";
import { total_filter } from "./data";
import axios from "axios";
import "./AdminPage.css";

const AdminPage = () => {
    const [logined, setLogined] = useState(false);
    const [header, setHeader] = useState("");
    const [body, setBody] = useState("");
    const [userName, setUserName] = useState("");
    const [password, SetPassWord] = useState("");
    const [selectedFilter, setSelectedFilter] = useState(() => {
        let mylist = [];
        for(var i = 0; i < total_filter.length; i++){
            mylist.push(false);
        }
        return mylist;
    });

    const handleLogin = () => {
        axios({url: 'http://localhost:3001/signin', method: 'post', data:{username: userName, password: password}}).then((response) => {
            console.log(response.data.status);
            setLogined(response.data.result);
          });

    }

    const handleTagOnclick = (key) => {
        let changeList = selectedFilter;
        let index = key;
        changeList[index] = changeList[index]? false : true;
        setSelectedFilter([...changeList]);
        console.log(selectedFilter);
    }

    const handleNewPost = (e) => {
        let submitBody = new Object();
        submitBody["title"] = header;
        submitBody["date"] = new Date();
        let tagList = [];
        for(var i = 0; i < total_filter.length; i++){
            if(selectedFilter[i]){
                tagList.push(total_filter[i]);
            }   
        } 
        submitBody["tags"] = tagList;
        const bodyList = body.split("\n");
        axios({url: 'http://localhost:3001/addpost', method: 'post', params: {tags: JSON.stringify(tagList), title: header, date: new Date()}, data:{body: JSON.stringify(bodyList)}}).then((response) => {
            console.log(response.data.status);
          });

    }

    if(logined){
    return (
        
        <div className="Admin_page_container">
            <h3>Create a new post</h3>
        <h5>Header</h5>
        <textarea name={header} onChange={(e) => setHeader(e.target.value)} value={header} cols={150} rows={1}></textarea>
        <h5>Tags</h5>
        <div className="adminPage_tags_container">
            {
                total_filter.map((i, key) => {
                    return(<span key = {key} onClick={(e) => handleTagOnclick(key)} value={i} className={selectedFilter[key]? "selected adminPage_tags" : "unselected adminPage_tags"}>{i}</span>);
                })
            }
        </div>
        <h5>Content</h5>
        <textarea name={body} onChange={(e) => setBody(e.target.value)} value={body} cols={150} rows={20}></textarea>
        <button onClick={handleNewPost} className="adminPage_submit">Submit</button>
        </div>
        
    )
    }else{
        return(
            <div className="Admin_page_container">
                <h3>Login</h3>
                <h5>User Name</h5>
                <input value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                <h5>Password</h5>
                <input value={password} onChange={(e) => SetPassWord(e.target.value)} type={"password"}></input>
                <button onClick={() => handleLogin()} className="login_button">Login</button>
            </div>
        )
    }

    
    
}

export default AdminPage;