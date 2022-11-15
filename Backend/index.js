const express = require("express");
const app = express();
const path = require("path");
const route = require("./routes/routes.js");

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/", route);

app.listen(5001, () => {
  console.log("PORT running on 5001");
});
