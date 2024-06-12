import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" grid grid-flow-col p-2 m-2 shadow-lg">
      <div className=" flex  col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className=" h-10 cursor-pointer"
          src="https://tse4.mm.bing.net/th?id=OIP.9p-z5zqBkdA8t51iaBWo0wHaHa&pid=Api&P=0&h=220"
          alt="Menu"
        />
        <a href="/">
          <img
            className=" h-10 mx-2 cursor-pointer"
            src="https://tse4.mm.bing.net/th?id=OIP._IfEaUssjZQwZ1u92b1_GgHaEK&pid=Api&P=0&h=220"
            alt="youtube-logo"
          />
        </a>
      </div>

      <div className=" col-span-10 px-10">
        <input
          className=" w-1/2 border border-gray-400 p-2 rounded-s-3xl"
          type="text"
          placeholder="Search"
        />
        <button className=" border border-gray-400 p-2 rounded-e-3xl bg-slate-200">
          🔍
        </button>
      </div>

      <div className=" col-span-1">
        <img
          className=" h-10"
          src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
          alt="User-Icon"
        />
      </div>
    </div>
  );
};

export default Head;
