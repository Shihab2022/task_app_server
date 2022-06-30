const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
let port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    res.send("allegro server in running");
  });
  app.listen(port, () => {
    console.log("allegro server  running on port", port);
  });