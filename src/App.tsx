import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Main from "./Pages/Main";
import './reset.css'
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CreatorsPage from "./Pages/CreatorsPage";
import CreatorDetailPage from "./Pages/CreatorDetailPage";
import EditPrPage from "./Pages/EditPrPage";
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


        <Route path="/pr" element={<CreatorsPage/>}/>
        <Route path="/pr/:name" element={<CreatorDetailPage/>}/>
        <Route path="/editPr" element={<EditPrPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;