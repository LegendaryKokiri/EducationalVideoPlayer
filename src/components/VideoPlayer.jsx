import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import "../stylesheets/video_player.css";

import playIcon from "../../res/play-icon.png";
import pauseIcon from "../../res/pause-icon.png";
import volumeIcon from "../../res/volume.png";
import fullscreenIcon from "../../res/fullscreen.png";

function Video({videoRef, url, setVideoMetadata, setVideoTime}) {
    return (
        <video ref={videoRef} onLoadedMetadata={setVideoMetadata} onTimeUpdate={setVideoTime} className="video">
            <source src={url} type="video/mp4"></source>
        </video>
    )
}

function PlayPauseButton({ toggleVideoPlaying }) {
    const [playbackIcon, setPlaybackIcon] = useState(playIcon);

    const togglePlayback = (e) => {
        const pausedVideo = toggleVideoPlaying();
        const buttonStateImage = pausedVideo ? playIcon : pauseIcon;
        setPlaybackIcon(buttonStateImage);
    }

    return (
        <img src={playbackIcon} onClick={togglePlayback}></img>
    )
}

function TimeSlider({ videoRef, setVideoTime, videoMetadata }) {
    const [sliderValue, setSliderValue] = useState(0);

    const setTime = (e) => {
        const time = parseInt(e.target.value);
        setVideoTime(time);
    }
    
    return (
        <input className="videoTime" type="range" onChange={setTime} min="0" max={videoMetadata.duration} value={videoMetadata.currentTime} defaultValue="0"></input>
    )
}

function VolumeSlider({ setVideoVolume }) {
    const setVolume = (e) => {
        const volume = parseFloat(e.target.value) / 100.0;
        setVideoVolume(volume);
    }
    

    return (
        <div className="volumeComponents">
            <img src={volumeIcon} width="32" height="32"></img>
            <input className="videoVolume" type="range" onChange={setVolume} min="0" max="100" defaultValue="80"></input>
        </div>
    )
}

function PlaybackSpeedSelection({ setVideoPlaybackSpeed }) {
    const setSpeed = (e) => {
        const speed = parseFloat(e.target.value);
        setVideoPlaybackSpeed(speed);
    }
    
    return (
        <select onChange={setSpeed} id="playbackSpeed" defaultValue="1.0">
            <option value="0.5">x0.5</option>
            <option value="1.0">x1.0</option>
            <option value="1.25">x1.25</option>
            <option value="1.5">x1.5</option>
            <option value="2.0">x2.0</option>
        </select>
    )
}

function FullscreenButton({ requestVideoFullscreen }) {
    return (
        <img src={fullscreenIcon} onClick={requestVideoFullscreen}></img>
    )
}

function VideoControls({ videoRef, videoMetadata }) {
    
    /* *********************** *
     * VIDEO CONTROL CALLBACKS *
     ***************************/
    const toggleVideoPlaying = () => {
        if(videoRef.current.paused) videoRef.current.play();
        else videoRef.current.pause();
        return videoRef.current.paused;
    }

    const setVideoTime = (time) => {
        videoRef.current.currentTime = time;
    }

    const setVideoVolume = (volume) => {
        videoRef.current.volume = volume;
    }

    const setVideoPlaybackSpeed = (speed) => {
        videoRef.current.playbackRate = speed;
    }

    const requestVideoFullscreen = () => {
        videoRef.current.requestFullscreen();
    }

    /* ************** *
     * FULL COMPONENT *
     ******************/
    return (
        <div className="videoControls">
            <PlayPauseButton toggleVideoPlaying={toggleVideoPlaying}></PlayPauseButton>
            <TimeSlider videoRef={videoRef} setVideoTime={setVideoTime} videoMetadata={videoMetadata}></TimeSlider>
            <VolumeSlider setVideoVolume={setVideoVolume}></VolumeSlider>
            <PlaybackSpeedSelection setVideoPlaybackSpeed={setVideoPlaybackSpeed}></PlaybackSpeedSelection>
            <FullscreenButton requestVideoFullscreen={requestVideoFullscreen}></FullscreenButton>
        </div>

    )
}

function VideoPlayer({ route }) {
    const videoRef = useRef(null);
    const [videoMetadata, setVideoMetadata] = useState({}); // Store video current time and duration

    const [ searchParams, setSearchParams] = useSearchParams();

    /* ********************* *
     * TIME SLIDER CALLBACKS *
     *************************/
    const videoLoadCallback = (e) => {
        setVideoMetadata({duration: e.target.duration, currentTime: 0});
    }

    const videoTimeUpdateCallback = (e) => {
        setVideoMetadata({duration: e.target.duration, currentTime: e.target.currentTime})
    }

    /* ************** *
     * FULL COMPONENT *
     ******************/
    return (
        <div className="videoPlayer">
            <Video videoRef={videoRef} url={searchParams.get("watchUrl")} setVideoMetadata={videoLoadCallback} setVideoTime={videoTimeUpdateCallback}></Video>
            <VideoControls videoRef={videoRef} videoMetadata={videoMetadata}></VideoControls>
        </div>
    )
}

export default VideoPlayer;