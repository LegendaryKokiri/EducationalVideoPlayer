import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import VideoDesc from "./VideoDesc.jsx";
import "../stylesheets/video_list.css"
import axios from "axios";

const test_video_1 = {
     "created_at": "2025-06-22T00:28:09.281766+00:00",
      "video_url": "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
      "user_id": "julian_zanders",
      "title": "Geeks for Geeks",
      "description": "Geeks for Geeks tutorial video - Snake game",
      "num_comments": 0,
      "id": "LyKMTeYRY8b0ZZg8Bgxx"
};

function VideoList() {
    const [videos, setVidoes] = useState([]);

    useEffect(() => {
        axios.get('https://take-home-assessment-423502.uc.r.appspot.com/api/videos')
            .then((response) => {
                console.log("Got a successful response");
                console.log(response);
            })
            .catch((error) => {
                console.log("Got an error response");
                setVidoes( [test_video_1] );
            })
    }, []);

    console.log(videos);

    return (
        <div className="videoList">
            {videos.map(video => (
                <VideoDesc title={video.title} description={video.description} url={video.video_url}></VideoDesc>
            ))}
        </div>
    )
}

export default VideoList;