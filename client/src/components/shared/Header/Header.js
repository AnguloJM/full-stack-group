import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className="header">
        <NavLink className="logo" to="/">
          PostsApp
        </NavLink>
        <div className="links">
          <NavLink className="link" to="/posts">
            Posts
          </NavLink>
          <NavLink className="link" to="/add-post">
            Add Post
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Nav;
