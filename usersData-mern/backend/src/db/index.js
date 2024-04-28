import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const app = express();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("MongoDB connected successfully");

        app.listen(4000 || process.env.PORT, () => {
            console.log(`Server connected successfully. Listening on port ${process.env.PORT || 4000}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export {connectDb, app};