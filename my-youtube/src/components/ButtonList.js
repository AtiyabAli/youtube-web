import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Games",
  "Songs",
  "Movies",
  "Crickets",
  "News",
  "Cocking",
  "Lives",
];

const ButtonList = () => {
  return (
    <div className=" flex">
      {list.map((item) => {
        return <Button name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
