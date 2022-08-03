import React from "react";

function VideoCard({url, title}) {
    return(
        <div>
         <iframe
            width="919"
            height="525"
            src={url}
            frameBorder="0"
            allowFullScreen
            title={title}
         />
        </div>
    )
}

export default VideoCard;