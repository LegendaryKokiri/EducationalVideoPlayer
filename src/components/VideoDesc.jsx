import React from "react";
import ReactDOM from "react-dom";

import playIcon from "../../res/play-icon.png";
import { useNavigate } from "react-router-dom";

function VideoDesc({ title, description }) {
    const navigate = useNavigate();

    const navigateWatch = () => navigate("/watch");


    return (
        <div className="videoDesc">
        <div className="videoTitleFrame">
            <p className="videoTitle">{title}</p>
        </div>
            <div className="videoDescFrame">
                <p className="videoDescText">{description}</p>
                <img className="videoSelect" onClick={navigateWatch} src={playIcon}></img>
            </div>
        </div>
    )
}

export default VideoDesc;