import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useState } from 'react';
import "../stylesheets/comment_section.css";

/* ********** *
 * COMPONENTS *
 **************/

function Comment() {
    return (
        <>
        <p className="commentUser">Username123</p>
        <p className="commentText">This is a thought-provoking comment on the video.</p>
        </>
    )
}

function CommentEntry() {
    const ref = useRef(null);

    useEffect(() => {
        const entryField = ref.current;

        const resizeTextArea = (event) => {
            entryField.style.height = "auto";
            entryField.style.height = entryField.scrollHeight +"px";
        };

        entryField.addEventListener("keyup", resizeTextArea);
        return () => {
            entryField.removeEventListener("keyup", resizeTextArea);
        }
    });

    const [comment, setComment] = useState('');

    return (
        <div className="commentInterface">
            <textarea
                ref={ref}
                className="commentEntry"
                placeholder="Write a comment!"
                value={comment}
                onChange = {e => setComment(e.target.value)}
            />
            <button className="commentButton">Post Comment</button>
        </div>
    )
}

function CommentSection() {
    return (
        <div className="commentSection">
            <CommentEntry></CommentEntry>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
        </div>
    )
}

export default CommentSection;