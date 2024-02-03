import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Main from "./Pages/Main";
import './reset.css'
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Creators from "./Pages/Creators";
import CreatorDetail from "./Pages/CreatorDetail";
import EditPr from "./Pages/EditPr";
import ProfilePage from "./Pages/ProfilePage";
import EditProfilePage from "./Pages/EditProfilePage";
import Community from "./Pages/Community";
import Promentoring from "./Pages/Promentoring";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/editprofile" element={<EditProfilePage/>} />
        <Route path="/community" element={<Community/>} />
        <Route path="/promentoring" element={<Promentoring/>} />


        <Route path="/pr" element={<Creators/>}/>
        <Route path="/pr/:name" element={<CreatorDetail/>}/>
        <Route path="/editPr" element={<EditPr />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;