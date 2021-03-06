import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <>
      <Link className="post" to={`/posts/${props._id}`}>
        <div className="post-title">{`${props.title}`}</div>
        <img className="post-image" src={props.imgURL} alt={props.title} />
        <div className="post-content">{props.content}</div>
      </Link>
    </>
  );
};
export default Post;
