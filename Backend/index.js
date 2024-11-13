import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/user.routes.js';
import messageRoute from './routes/message.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();  

const app = express();
const PORT = process.env.PORT || 3000;
const URL = process.env.MONGODB_URL;

app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true 
}));


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 20000, 
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message || error);
    }
};
connectDB();
app.use(cookieParser());
app.use(express.json());
app.use('/user', userRoute);
app.use("/message",messageRoute);

app.get('/', (req, res) => {
    res.send('HellohIwej,fygh');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
