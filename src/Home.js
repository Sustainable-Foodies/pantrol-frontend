import React from "react";
import { Link } from "react-router-dom";

export default function Home () {
  return (
    <div>
      <h1>Landing page goes here!</h1>
      <p>Click below to navigate to the app!</p>

      <Link to="/app">App</Link>
    </div>
  );
}