import video from "../data/video.js";
import VideoCard from "./VideoCard.js";
import React, {useState} from "react";
import DetailsPane from "./DetailsPane.js";
import CommentsPane from "./CommentsPane.js";

function App() {

  const [videoData, setVideoData] = useState(video)

  console.log("Here's your data:", video);

  function handleUpvote() {
    const newLikes = videoData.upvotes ++
    setVideoData({
      ...videoData,
      [videoData.upvotes]: newLikes
    })
  }

  function handleDownvote() {
    const newDislikes = videoData.downvotes ++
    setVideoData({
      ...videoData,
      [videoData.downvotes]: newDislikes
    })
  }

  return (
    <div className="App">
      <VideoCard url={videoData.embedUrl} title={videoData.title}/>
      <DetailsPane handleDownvote={handleDownvote} handleUpvote={handleUpvote} videoData={videoData} />
      <CommentsPane comments={videoData.comments}/>
    </div>
  );
}

export default App;
