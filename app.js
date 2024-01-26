const express = require('express')
const connection = require('./config/dbConfig')
const dotenv = require('dotenv')
const cors = require('cors')

const portfolioRoute = require('./routers/portfolioRouter')

dotenv.config();

const app  = express();
app.use(express.json());
app.use(cors())
app.use('/api/portfolio' , portfolioRoute);

const port = process.env.PORT || 5000;

app.listen(port , console.log(`Server Running on Port ${port}`))

connection();
