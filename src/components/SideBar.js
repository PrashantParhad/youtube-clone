import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const isSideBarVisible = useSelector((store) => store.mainSlice.showSideBar);
  if (!isSideBarVisible) return;
  return (
    <div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHouse} /> Home
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
    </div>
  );
};

export default SideBar;
