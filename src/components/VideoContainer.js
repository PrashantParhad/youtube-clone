import React, { useEffect, useState } from "react";
import VideoContainerCard from "./VideoContainerCard";
import { GET_VIDEOS_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    getVideosInformation();
  }, []);

  const getVideosInformation = async () => {
    const list = await fetch(GET_VIDEOS_URL);
    const jsonList = await list.json();
    setVideosList(jsonList.items);
  };
  return (
    <div className="videocontainer">
      {videosList.map((videoData) => (
        <Link to={"/watch?v=" + videoData.id}>
          <VideoContainerCard
            key={videoData.id}
            data={videoData}
          ></VideoContainerCard>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
