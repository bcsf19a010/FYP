import React from "react";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import VideoPlayer from "./videoPlayer/videopage";

export default function DisplayExercises() {
  const location = useLocation();
  const { bodyPart } = location.state;
  const [exercises, setExcercises] = useState([]);

  useEffect(() => {
    const fetchAllWorkouts = async () => {
      const data = await fetch(`/user/getExercise/${bodyPart}`);
      const allWorkouts = await data.json();
      if (data.ok) {
        setExcercises(allWorkouts.exercises);
      }
    };
    fetchAllWorkouts();
  }, []);

  return (
    <div>
      {exercises?.map((ex) => {
        return <VideoPlayer exercise={ex} />;
      })}
    </div>
  );
}