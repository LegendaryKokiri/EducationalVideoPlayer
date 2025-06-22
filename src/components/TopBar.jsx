import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import "../stylesheets/top_bar.css";

import homeIcon from "../../res/home.png";
import newIcon from "../../res/new.png";

function TopBar() {
    const navigate = useNavigate();

    const navigateHome = () => navigate("/");

    const navigateUpload = () => navigate("/upload");

    return (
        <div className="topBar">
            <h2 className="appTitle">Educational Video Player</h2>
            <div className="navButtons">
                <img className=".homeButton" onClick={navigateHome} src={homeIcon}></img>
                <img className=".newButton" onClick={navigateUpload} src={newIcon}></img>
            </div>
        </div>
    )
}

export default TopBar;