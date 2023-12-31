import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./src/config/mongo.js";
import router from "./src/routes/routes.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import routesForm from "./src/routes/routesform.js";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api", router);
app.use("/api", routesForm);

async function connect() {
  try {
    app.listen(8000, () => {
      connectDB(process.env.MONGODB_PASSWORD);
      console.log("server is running on  port 8000");
    });
  } catch (err) {
    console.log(err);
  }
}
connect();
