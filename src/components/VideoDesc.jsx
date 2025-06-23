import React from "react";
import ReactDOM from "react-dom";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";

import playIcon from "../../res/play-icon.png";

function VideoDesc({ title, description, url, videoId }) {
    const navigate = useNavigate();

    const navigateWatch = () => navigate({
        pathname: "/watch",
        search: `?${createSearchParams({watchUrl: url, videoId: videoId })}`
    });

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