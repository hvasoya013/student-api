const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');
const bodyParser = require('body-parser');

//connect to mongoDB
mongoose.connect("mongodb+srv://Data:Data2345@cluster0.1mdei.mongodb.net/Student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use(bodyParser.urlencoded({extended:true}));
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("server started!!!...");
        })
    }
);
