import React from "react";

function VideoPlayer(props) {
  return (
    <div>
      <h1>Video</h1>
      <video autoPlay muted loop style={{ maxWidth: "500px" }}>
        <source src={props.videoPath} type="video/mp4" />
      </video>
      <p>Place your hands firmly on the ground, directly under shoulders.</p>
      <p>
        Flatten your back so your entire body is straight and slowly lower your
        body
      </p>
      <p>
        Draw shoulder blades back and down, keeping elbows tucked close to your
        body
      </p>
      <p>Exhale as you push back to the starting position</p>
    </div>
  );
}

export default VideoPlayer;
