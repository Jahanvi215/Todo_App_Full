const express = require('express');
const mongoose  = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
  .then( async() => {
    await console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
const PORT = 8000;

app.listen(PORT, async()=>{
    await console.log(`Your Server is running on port ${PORT}`)
  
  })

  //ToDo123MERN