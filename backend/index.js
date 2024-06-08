const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const userRoutes = require("./routes/users.js");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb://127.0.0.1:27017/educationDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));

app.use("/users", userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
