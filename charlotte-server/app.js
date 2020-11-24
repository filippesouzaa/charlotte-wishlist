const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("./models/gifts");

const Gifts = mongoose.model("gifts");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});

app.use(express.json());

mongoose
  .connect("mongodb://localhost/charlotte-server", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Mongo DB is connected!");
  })
  .catch((erro) => {
    console.log("Error on mongo database!");
  });

app.get("/", (req, res) => {
  Gifts.find({})
    .then((gifts) => {
      return res.json(gifts);
    })
    .catch((erro) => {
      return res.status(400).json({
        error: true,
        message: "Object not found",
      });
    });
});

app.post("/post", (req, res) => {
  const gifts = Gifts.create(req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Object not created",
      });

    return res.status(400).json({
      error: false,
      message: "Created success",
    });
  });
});

app.listen(8080, () => {
  console.log("Online!");
});
