const Workout = require("../models/Workout");

exports.addWorkout = async (req, res) => {
    const { name, duration } = req.body;
    try {
        const workout = new Workout({ userId: req.user.id, name, duration });
        await workout.save();
        res.status(201).json(workout);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getMyWorkouts = async (req, res) => {
    const workouts = await Workout.find({ userId: req.user.id });
    res.status(200).json(workouts);
};

exports.deleteWorkout = async (req, res) => {
    await Workout.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.status(200).json({ message: "Workout deleted successfully" });
};

exports.completeWorkoutStatus = async (req, res) => {
    const workout = await Workout.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        { status: "completed" },
        { new: true }
    );
    res.status(200).json({ message: "Workout status updated successfully", updatedWorkout: workout });
};