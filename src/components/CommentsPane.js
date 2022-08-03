
import React, {useState} from "react";
import CommentsList from "./CommentsList";

function CommentsPane({comments}) {
    const [showComment, setShowComments] = useState(true)

    
    function handleHideComments() {
        setShowComments(current => !current)
    }
    
    return (
        <div>
            <button 
            onClick={handleHideComments}
            > 
            Hide Comments 
            </button>
            <hr/>
            {showComment && <CommentsList comments = {comments} />}
        </div>
    )
}

export default CommentsPane;