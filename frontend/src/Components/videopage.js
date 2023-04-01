import React from "react";

function VideoPlayer(props) {
  return (
    <div>
      <h1>Video</h1>
      <video autoPlay muted loop style={{ maxWidth: "500px" }}>
        <source src={props.videoPath} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
