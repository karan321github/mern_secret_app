import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes  from './routes/user.route.js';
import authRoutes  from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

// mongoose.connect(process.env.MONGO)
// .then(() => {
//         console.log("CONNECTED TO DATABASE");
// }). catch((e) => {
//         console.log(e);
// })

mongoose.connect('mongodb://127.0.0.1:27017/mern-auth')
const db = mongoose.connection 
db.on("error" , console.error.bind(console , "connection error:"))
db.once("open" , ()=> {
        console.log("DATABASE CONNECTED")
});

const __dirname = path.resolve();
const app = express();  
app.use(express.static(path.join(__dirname , '/client/dist')))

app.get('*' , (req , res) => {
        res.sendFile(path.join(__dirname , 'client' , 'dist' , 'index.html'))
})
app.use(express.json());
app.use(cookieParser());

app.listen(3000 , () => {
        console.log("server is listening on port 3000");
});

app.use('/api/user' , userRoutes);
app.use('/api/auth' , authRoutes);

app.use((err , req , res , next) => {
     const statusCode = err.statusCode || 500;
     const message = err.message || 'Internal server error';
     res.status(statusCode).json({
        success : false,
        message,
        statusCode,
     });
})