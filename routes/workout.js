const express = require("express");
const {
    addWorkout,
    getMyWorkouts,
    deleteWorkout,
    completeWorkoutStatus,
} = require("../controllers/workoutController");
const auth = require("../auth");
const router = express.Router();

router.post("/addWorkout", auth, addWorkout);
router.get("/getMyWorkouts", auth, getMyWorkouts);
router.delete("/deleteWorkout/:id", auth, deleteWorkout);
router.put("/completeWorkoutStatus/:id", auth, completeWorkoutStatus);

module.exports = router;