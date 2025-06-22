import React from "react";
import ReactDOM from "react-dom";
import VideoDesc from "./VideoDesc.jsx";
import "../stylesheets/video_list.css"

function VideoList() {
    return (
        <div className="videoList">
            <VideoDesc title="Quaternions" description="How to quaternion"></VideoDesc>
            <VideoDesc title="React" description="How to React"></VideoDesc>
        </div>
    )
}

export default VideoList;