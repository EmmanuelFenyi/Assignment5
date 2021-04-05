const express = require("express");

require("./config/dbConnect");

const app = express();

app.use(express.json());

app.use("/vehicles", require("./router/vehicleRouter"));

app.listen(4000, () => console.log("server is up and running!"));
