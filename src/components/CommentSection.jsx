import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useState } from 'react';
import "../stylesheets/comment_section.css";
import axios from "axios";

/* ********** *
 * COMPONENTS *
 **************/

const test_comment_1 = {
      "created_at": "2025-06-23T00:09:41.603337+00:00",
      "content": "This a thought-provoking comment on the video.",
      "user_id": "Username_123",
      "video_id": "LyKMTeYRY8b0ZZg8Bgxx",
      "id": "SQZXwYmljLwFC2e5jKex"
    }

function Comment({ commentUser, commentText }) {
    return (
        <>
        <p className="commentUser">{commentUser}</p>
        <p className="commentText">{commentText}</p>
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

function CommentSection({ video_id }) {
    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        axios.get(`https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments?video_id=${video_id}`)
            .then((response) => {
                console.log("Got a successful response");
                console.log(response);
            })
            .catch((error) => {
                console.log("Got an error response");
                setComments( [ test_comment_1 ] );
            })
    }, []);

    return (
        <div className="commentSection">
            <CommentEntry></CommentEntry>
            {comments.map(comment => (
                <Comment commentUser={comment.user_id} commentText={comment.content}></Comment>
            ))}
        </div>
    )
}

export default CommentSection;