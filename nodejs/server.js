const cors = require("cors");

const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
const port = 9000;

mongoose
  .connect(
    "mongodb+srv://an:quangan186@cluster0.fgj7cqr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`Connecting to Mongoose successfully`);
  })
  .catch((err) => {
    console.log(err);
  });
  
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
