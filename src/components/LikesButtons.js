import React from "react";

function LikesButtons({upvotes, downvotes, handleUpvote, handleDownvote}) {
    
    
    
    return (
        <div>
            <button onClick={handleUpvote}>{upvotes} 👍</button>
            <button onClick={handleDownvote}>{downvotes} 👎</button>
        </div>
    )
}

export default LikesButtons;