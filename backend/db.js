import mongoose from "mongoose"
import "dotenv/config"


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {})
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Failed to connect MongoDB', error);
    }
}

export default connectDB;