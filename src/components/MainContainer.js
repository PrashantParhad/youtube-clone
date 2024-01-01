import React from "react";
import VideoContainer from "./VideoContainer";
import MainContainerButton from "./MainContainerButton";
import { useDispatch } from "react-redux";
import { showSlice } from "../utils/mainSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  dispatch(showSlice());

  return (
    <div>
      <MainContainerButton></MainContainerButton>
      <VideoContainer></VideoContainer>
    </div>
  );
};

export default MainContainer;
