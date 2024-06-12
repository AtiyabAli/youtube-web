import React from "react";


const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    
      <div className=" bg-slate-200 w-60 rounded-xl p-3 m-3 shadow-lg">
        <img className=" h-48" src={thumbnails.high.url} alt="" />
        <ul>
          <li>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount}</li>
        </ul>
      </div>
    
  );
};

export default VideoCard;
