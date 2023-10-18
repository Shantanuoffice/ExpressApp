import mongoose from "mongoose";
import logger from "../logger.js";
import dotenv from "dotenv";
dotenv.config();

export default function connectMongoDb() {
    mongoose.connect(process.env.MONGO_CONNECTION_STRING, )
    .then((data) => {
        logger.info(`DB CONNECTED - ${data}`);
    })
    .catch((err) => {
        logger.error("Error has occured")
    })
}