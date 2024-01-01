import React from "react";
import { useState } from "react";

const MainContainerButton = () => {
  const buttonList = [
    "All",
    "Study Skills",
    "Desks",
    "collegues",
    "Music",
    "Nursing",
    "Live",
    "Thoughts",
    "Motivation",
    "Bollywood Music",
    "Podcast",
    "Pop Music",
    "Indian Music",
    "K POP",
    "Techno House",
    "EDM",
    "Hindi",
    // "Marathi",
    // "Comedy",
    // "2023 Classic",
  ];
  return (
    <div className="maincontainer">
      {buttonList.map((item) => (
        <button className="mainContainerButtons">{item}</button>
      ))}
    </div>
  );
};

export default MainContainerButton;
