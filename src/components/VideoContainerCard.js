import React from "react";

const VideoContainerCard = ({ data }) => {
  // console.log(data);

  const { snippet, statistics } = data;
  const thumbnail = snippet?.thumbnails?.maxres
    ? snippet?.thumbnails?.maxres?.url
    : snippet?.thumbnails?.default?.url;
  return (
    <div className="videocard">
      <img src={thumbnail} alt="thumbnail"></img>
      <div>{snippet?.title}</div>
      <div>
        <span>{statistics?.viewCount}</span>
        {/* <span>publishedAt</span> */}
      </div>
    </div>
  );
};

export default VideoContainerCard;
