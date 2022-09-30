import React, { useState} from "react";
import { total_filter } from "./data";
import axios from "axios";
import "./AdminPage.css";
import BarLoader from "react-spinners/BarLoader";

const AdminPage = () => {
    const link = process.env.REACT_APP_MyConnectionString || 'http://localhost:3001';
    const [logining, setLogining] = useState(false);
    const [addingNewPost, setAddingNewPost] = useState(false);
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
    const override = {
        display: "block",
        margin: "0 auto 10px",
      };

    const handleLogin = () => {
        setLogining(true);
        axios({url: link + '/signin', method: 'post', data:{username: userName, password: password}}).then((response) => {
            console.log("login " +response.data.status);
            alert("login " + response.data.result);
            setLogining(false);
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
        if(header == "" || body == ""){
            alert("missing value");
            return;
        }
        setAddingNewPost(true);
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
        axios({url: link + '/addpost', method: 'post', params: {tags: JSON.stringify(tagList), title: header, date: new Date()}, data:{body: JSON.stringify(bodyList)}}).then((response) => {
             setAddingNewPost(false);
             alert("Adding new post " + response.data.status);
             console.log("Adding new post " +response.data.status);
             if(response.data.status == "success"){
                setHeader("");
                setBody("");
             }
          });

    }

    if(logined){
    return (
        
        <div className="Admin_page_container">
            <BarLoader loading={addingNewPost} cssOverride={override} width={"100%"} height={10} color={"#013220"}/>
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
                <BarLoader loading={logining} cssOverride={override} width={"100%"} height={10} color={"#013220"}/>
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