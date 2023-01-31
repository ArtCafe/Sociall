import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Postme from "./pages/Postme";
import Login from "./pages/Login";
import Postid from "./pages/Postid";
import Register from "./pages/Register"
import Postcreate from "./pages/Postcreate"
import Fotopostare from "./pages/Fotopostare";
import Profileupdate from "./pages/Profileupdate";
import Videopost from "./pages/Videopost"
import Videocreate from "./pages/Videocreate";
import 'w3-css/w3.css';


function App() {


  return (
    <>

      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Postme />} />
          <Route path="foto" element={<Fotopostare/>} />
          <Route path="/foto/:id" element={<Postid/>} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="postcreate" element={<Postcreate />} />
          <Route path="profile" element={<Profileupdate />} />
          <Route path="video" element={<Videopost/>} />
          <Route path="videocreate" element={<Videocreate />} />
        </Route>
      </Routes>
  
  
     </>
  );
}

export default App;
