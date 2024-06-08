// models/User.js
const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
    level: {
        type: String,
        enum: ["10th", "12th", "Graduation", "Post-graduation", "PhD"],
        required: true,
    },
    courseDuration: {
        type: String,
        required: true,
    },
    courseType: {
        type: String,
        enum: ["regular", "open", "online"],
        required: true,
    },
    yearOfCompletion: {
        type: Number,
        required: true,
    },
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    education: [educationSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
