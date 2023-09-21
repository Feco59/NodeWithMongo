import express from 'express'
import apiRouter from './Routes/apiRoutes.js';
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

const app = express();
app.use(apiRouter)

export default app;