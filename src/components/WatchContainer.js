import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { useDispatch } from "react-redux";
import { hideSlice } from "../utils/mainSlice";

const WatchContainer = (data) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  dispatch(hideSlice());
  let videoId = searchParams.get("v");
  return (
    <div className="watchContainer">
      <div className="play-video">
        <iframe
          width="560"
          height="315"
          src={
            "https://www.youtube.com/embed/" + videoId + "?si=GkmcascjNunk6pbI"
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div></div>
      <div>
        <CommentsContainer key={videoId} id={videoId} />
      </div>
    </div>
  );
};

export default WatchContainer;
