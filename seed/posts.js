const db = require("../db/connection");
const Post = require("../models/post");

db.on("error", console.error.bind(console, "MongDB connection error:"));

const main = async () => {
  const posts = [
    {
      title: "Post 001",
      imgURL:
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  await Post.insertMany(posts);
  console.log("Created posts!");
};
const run = async () => {
  await main();
  db.close();
};

run();
