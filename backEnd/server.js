const express = require("express");
const app = express();
const todos = require("./routes/routes");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost:27017/todoapi";

mongoose.connect(mongoURL);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));

const port = process.env.PORT || 6969;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", todos);

app.listen(port, () => {
  console.log("Server running on port " + port);
});
