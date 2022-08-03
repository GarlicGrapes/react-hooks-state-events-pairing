import React from "react";

function CommentsList({comments}) {
    
    const commentsList = comments.map((comment) => {
        return (
            <div>
            
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>

            </div>
        )
    }) 
    
    return(
        <div>
            <h3>{comments.length} Comments</h3>
            <div>{commentsList}</div>
        </div>
    )
}

export default CommentsList;