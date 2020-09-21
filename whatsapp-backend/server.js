// To use ES6 syntax of importing, specify "type" : "module" in package.json.

import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";

const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1076566",
  key: "29fafef1784e2b8306b8",
  secret: "672b6432d4e0bb832e5b",
  cluster: "ap2",
  encrypted: true,
});

// DB config
const connectionURL =
  "mongodb+srv://sg:0nYaauQipycHyobW@cluster0.b0zqf.mongodb.net/whatsappDB?retryWrites=true&w=majority";
mongoose.connect(connectionURL, {
  userCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

const db = mongoose.connection;
db.once("open", () => {
  const msgCollection = db.collection("messagecontents");
  // Mongo adds "s" automatically to the collection name.

  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change);
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
      });
    } else {
      console.log("Error triggering Pusher.");
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
      // 201 represents data created
    }
  });
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`Listening...`));

//0nYaauQipycHyobW
