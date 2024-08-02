import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'

//router
import AuthRoute from './Routes/AuthRoutes.js';
import UserRoute from './Routes/UserRoutes.js';
import PostRoute from './Routes/PostRoute.js'

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors())

const CONNECTION_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.error('Connection error is:', error));

app.get('/', (req, res) => {
  res.send('Hello, World');
});
 
// use of routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoute); // This should be /user
app.use('/posts',PostRoute)

export default app;
