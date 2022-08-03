import React from "react";
import LikesButtons from "./LikesButtons";

function DetailsPane({videoData, handleUpvote, handleDownvote}) {
    
    
    
    
    return(
        <div>
            <h2>{videoData.title}</h2>
            <h3>{videoData.views} Views | Uploaded {videoData.createdAt}</h3>
            <LikesButtons handleDownvote={handleDownvote} handleUpvote={handleUpvote} upvotes={videoData.upvotes} downvotes={videoData.downvotes}/>
        </div>
    )
}

export default DetailsPane;