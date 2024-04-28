import mongoose from 'mongoose'
import express from 'express'

const app = express();

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/usersData")
        app.listen(3000, () => {
            console.log("Server connect success");
        })
        
    } catch (error) {
        console.log("ERROR", error )
    }
}

export {connectDb, app};