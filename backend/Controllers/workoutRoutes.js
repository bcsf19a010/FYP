const express = require("express");
const router = express.Router();
const workoutModel = require("../models/workoutModel");
const requireAuth = require("./middleware");

router.use(requireAuth);

//to get All workouts
router.get("/", async (req, resp) => {
  const user_id = req.user._id;
  const workouts = await workoutModel.find({ user_id }).sort({ createdAt: -1 });
  if (workouts) return resp.status(200).json(workouts);
  else return resp.status(404).json({ error: "something went wrong" });
});

//to get single workout
router.get("/:id", async (req, resp) => {
  const { id } = req.params;
  const workout = await workoutModel.findById({ _id: id });
  if (workout) return resp.status(200).json(workout);
  else return resp.status(404).json({ error: "something went wrong" });
});

//to add workout
router.post("/", async (req, resp) => {
  const { title, reps, weight } = req.body;
  const user_id = req.user._id;
  try {
    const workout = workoutModel({ title, reps, weight, user_id });
    const result = await workout.save(workout);
    return resp.status(200).json(result);
  } catch (error) {
    return resp.status(404).json({ error: error.message });
  }
});

//to update workout
router.patch("/:id", async (req, resp) => {
  const { id } = req.params;
  const result = await workoutModel.findByIdAndUpdate(
    { _id: id },
    { title: req.body.title, reps: req.body.reps, weight: req.body.weight }
  );
  if (result) return resp.status(200).json(result);
  else return resp.status(404).json({ error: "No data found" });
});

//to delete workout
router.delete("/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    const workout = await workoutModel.findByIdAndDelete({ _id: id });
    return resp.status(200).json(workout);
  } catch (error) {
    return resp.status(404).json({ error: "something went wrong" });
  }
});

module.exports = router;
