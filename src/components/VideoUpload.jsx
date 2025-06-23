import React, { useRef } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../stylesheets/video_upload.css";

function VideoUpload () {
    const titleRef = useRef(null);
    const urlRef = useRef(null);
    const descRef = useRef(null);

    const handleUpload = (e) => {
        const title = titleRef.current.value;
        const url = urlRef.current.value;
        const desc = descRef.current.value;

        const data = {
            user_id: "julian_zanders", // A future interation might dynamically set user_id based on a login
            description: desc,
            video_url: url,
            title: title
        }

        axios.post(
            'https://take-home-assessment-423502.uc.r.appspot.com/api/videos',
            data
        ).then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    return (
        <div className="uploadInterface">
            <div className="uploadContainer">
                <input ref={titleRef} placeholder="Video Title"></input>
                <input ref={urlRef} placeholder="Video URL"></input>
                <textarea ref={descRef} placeholder="Video Description" rows="5" cols="1"></textarea>
                <button className="uploadButton" onClick={handleUpload}>UPLOAD VIDEO</button>
            </div>
        </div>
    )

}

export default VideoUpload;