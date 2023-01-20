import express from "express";
import 'express-async-errors'
import dotenv from 'dotenv';
dotenv.config()
import connectDB from "./db/connect.js";
import morgan from 'morgan'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';


const app = express();



//routes
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

//middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import authenticateUser from './middleware/auth.js'

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/build')));


if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());


app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs',authenticateUser,jobsRouter)

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.port || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => console.log(`server is running on ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()

