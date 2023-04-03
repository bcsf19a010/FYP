import React from "react";
import "./video.css"
function VideoPlayer(props) {
  return (
    <div className="videoContainer">
        <h1>Video</h1>
        <video className="videoEdit" autoPlay muted loop>
          <source src={props.videoPath} type="video/mp4" />
        </video>
        <ol className="list">
          <li className="listItem">Place your hands firmly on the ground, directly under shoulders.</li>
          <li className="listItem">
            Flatten your back so your entire body is straight and slowly lower your
            body
            </li>
          <li className="listItem">
            Draw shoulder blades back and down, keeping elbows tucked close to your
            body
            </li>
          <li className="listItem">Exhale as you push back to the starting position</li>
        </ol>
    </div>
  );
}

export default VideoPlayer;
