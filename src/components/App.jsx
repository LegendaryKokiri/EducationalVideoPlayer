import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import VideoList from "./VideoList.jsx";
import VideoUpload from "./VideoUpload.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import CommentSection from "./CommentSection.jsx";

import "../stylesheets/app.css";

function App() {
    // VIDEO SELECTION PAGE
    const videoList = (
        <>
            <TopBar></TopBar>
            <VideoList></VideoList>
        </>
    )

    // VIDEO UPLOAD PAGE
    const videoUpload = (
        <>
            <TopBar></TopBar>
            <VideoUpload></VideoUpload>
        </>
    )

    // VIDEO PLAYBACK PAGE
    const videoInterface = (
        <>
            <TopBar></TopBar>
            <VideoPlayer></VideoPlayer>
            <CommentSection></CommentSection>
        </>
    )
    
    // ROOT APP
    return (
        <div id="app">
            <Routes>
                <Route path="/" element={videoList}></Route>
                <Route path="/upload" element={videoUpload}></Route>
                <Route path="/watch" element={videoInterface}></Route>
            </Routes>
        </div>
    )
}

export default App;