import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className=" flex flex-wrap">
      {videos.map((item)=>{
        return <Link to={"/watch?v=" + item.id}><VideoCard key={item.id} info={item}/></Link>
      })}
      
    </div>
  );
};

export default VideoContainer;
