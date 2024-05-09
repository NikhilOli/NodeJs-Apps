import express from 'express' 
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { connectDb } from './src/db/connectDb.js';
import { router } from './src/routes/user.routes.js';
import { contactRouter } from './src/routes/contact.routes.js';



const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))
app.use(cookieParser());

connectDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server started at port ${process.env.PORT}`);
    })
}).catch((err) => console.log("Error connecting database", err));

app.use("/", router)
app.use("/dashboard", contactRouter)