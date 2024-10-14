import express from 'express'
import 'dotenv/config'
import connectDB from './db.js';
import authRoutes from './routes/authRoutes.js'
import recipeRoutes from './routes/recipeRoutes.js'

const app = express();
const PORT = process.env.PORT || 5000;

// Mongodb Connection
connectDB();

// Middlewares
app.use(express.json())


// Routes
app.use('/api/auth', authRoutes)
app.use('/api/recipe', recipeRoutes)

app.listen(PORT, () => {
    console.log(`Server started running on port ${PORT}`);
})