import React from "react";
import "./video.css";

function VideoPlayer(props) {
  return (
    <div className="videoContainer">
      <h2 style={{ margin: "25px", color: "Black" }}>{props.exercise.name}</h2>
      <video className="videoEdit" autoPlay muted loop>
        <source
          src={`videos/${props.exercise.bodyPart}/${props.exercise.exReferece} `}
          type="video/mp4"
        />
      </video>
      <h4 style={{ marginTop: "25px", marginLeft: "25px" }}>
        <u>Tips</u>
      </h4>
      <ol className="list">
        {props.exercise.description?.map((d) => {
          return <li className="listItem">{d} </li>;
        })}
      </ol>
    </div>
  );
}

export default VideoPlayer;
