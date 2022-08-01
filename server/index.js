import express from 'express'
import bodParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js' 
// watchout this line

const app = express();

;

app.use(bodParser.json({limit:"30mb" , extended : true}));
app.use(bodParser.urlencoded({limit:"30mb" , extended : true}));
app.use(cors());
app.use('/posts',postRoutes)

const URL = 'mongodb+srv://newproject:newproject123@cluster0.x9u6x.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));
 



