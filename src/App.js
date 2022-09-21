import React from "react";
import './App.css';
import TopBar from "./component/TopBar"
import NavBar from "./component/NavBar"
import Main from "./component/Main";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./component/AdminPage";
import Content from "./component/Content";
import Home from "./component/Home";
import About from "./component/About";
import Stat from "./component/Stat";


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/stat" element={<Stat />}/>
        <Route path="/about" element={<About />}/>
        <Route path="posts">
          <Route index element={<Main />} />
          <Route path=":id" element={<Content/>} />
        </Route>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Home />}/>

      </Routes>
    </div>
  );
}

export default App;
