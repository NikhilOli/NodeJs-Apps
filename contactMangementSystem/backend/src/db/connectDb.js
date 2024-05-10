import mongoose from "mongoose";


export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.URI)
        console.log("Mongodb connected successfully");
        console.log(process.env.URI);
    } catch (error) {
        console.log("Error connecting db", error);
    }
}