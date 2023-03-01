import express  from 'express';
import  dotenv  from   'dotenv';

import Connection from './database/db.js';
import DefaultData from './default.js';
import home  from "./routes/home.js";
import cors  from  'cors';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 5000;

const app = express()

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/' , home);
app.use('/login', home);





const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@happy-book.2dcwz8z.mongodb.net/?retryWrites=true&w=majority`;
Connection(URL);





app.listen(process.env.PORT ,() =>{

    console.log(`server is running on PORT ${process.env.PORT}`);
})

DefaultData();




