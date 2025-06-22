import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "../stylesheets/video_upload.css";

function VideoUpload () {
    const titleRef = useRef(null);
    const urlRef = useRef(null);
    const descRef = useRef(null);

    const handleUpload = (e) => {
        // const title = titleRef.current.value;
        // const url = urlRef.current.value;
        // const desc = descRef.current.value;

        const params = {
            user_id: "julian_zanders",
            description: "test_video",
            video_url: "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
            title: "XML HTTP Request Upload"
        }

        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("POST", 'https://take-home-assessment-423502.uc.r.appspot.com/api/videos', false);
        xmlHttp.setRequestHeader("accept", "application/json");
        xmlHttp.setRequestHeader("Content-Type", "application/json");
        xmlHttp.send(JSON.stringify(params));
        console.log(xmlHttp.responseText);

        // fetch("https://take-home-assessment-423502.uc.r.appspot.com/api/videos")
    }

    return (
        <div className="uploadInterface">
            <div className="uploadContainer">
                <input ref={titleRef} placeholder="Video Title"></input>
                <input ref={urlRef} placeholder="Video URL"></input>
                <textarea descRef={descRef} placeholder="Video Description" rows="5" cols="1"></textarea>
                <button className="uploadButton" onClick={handleUpload}>UPLOAD VIDEO</button>
            </div>
        </div>
    )

}

export default VideoUpload;