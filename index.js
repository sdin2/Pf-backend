const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./src/routes/userRoute");
const { user, password } = process.env;
// settings
const app = express();
const port = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.use("/api", userRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(
    `mongodb+srv://${user}:${password}@pf-henry.at6ynza.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));
