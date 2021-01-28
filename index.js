const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');

//connect to mongoDB
mongoose.connect("mongodb+srv://Data:Data2345@cluster0.1mdei.mongodb.net/Student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("server started!!!...");
        })
    }
);
