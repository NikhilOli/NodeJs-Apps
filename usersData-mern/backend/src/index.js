
import dotenv from 'dotenv'
import {connectDb, app} from './db/index.js';


dotenv.config({path: './env'});


connectDb()
app.get('/', (req, res) => {
    res.send("Hello World");
})
    
