import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.URI}/${process.env.DB_NAME}`)
        console.log("Mongodb connected successfully");
    } catch (error) {
        console.log("Error connecting db", error);
    }
}