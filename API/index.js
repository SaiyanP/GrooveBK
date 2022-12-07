import { config } from "dotenv";
config();
import express from "express";
import mongoose from "mongoose";
import { globalRouter } from "./const/router.const.js";

const { MONGO_USER, MONGO_PASSWORD, MONGO_CLUSTER } = process.env;

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.rj2hhvk.mongodb.net/test`;

const app = express();

app.use(express.json());

app.use(globalRouter);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

mongoose.set("strictQuery", true);

mongoose.connect(MONGO_URI, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MongoDB Connected.");
    app.listen(PORT, HOST, () => {
      console.log(`Server is up at port ${PORT}`);
    });
  }
});
