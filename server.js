const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./src/models/User");
const cors = require("cors");
const STRING = require("./src/constants/strings");
const routes = require("./src/routes");

const app = express();
app.use(bodyParser.json());

const MONGODB_URI = `${STRING.MONGODB_URI_STRING}`;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    const users = [
      { email: "test@test.com", password: "test123" },
      { email: "assignment@dealsdray.com", password: "assignment" },
    ];
    User.insertMany(users)
      .then(() => {
        console.log("Predefined users inserted successfully");
      })
      .catch((error) => {
        console.error("Error inserting users:", error);
      });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(routes);

const PORT = `${STRING.PORT_NUMBER}`;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
