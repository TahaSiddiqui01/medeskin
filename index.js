const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//configure database and mongoose
mongoose
  .connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log({ database_error: err });
  });



//registering cors
app.use(cors());

//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use morgan
app.use(morgan("dev"));

//Routes
// app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));
const Routes = require("./route/routes"); //bring in our user routes
app.use("/api", Routes);

// for production routes
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

//Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("App is running on " + PORT);
});
