import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className=" p-5 shadow-lg col-span-1">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Lives</li>
      </ul>
      <h1 className=" font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className=" font-bold pt-5">Watch later</h1>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Lives</li>
      </ul>
    </div>
  );
};

export default Sidebar;
