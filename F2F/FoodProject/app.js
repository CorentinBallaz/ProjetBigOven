const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const MyAPIRoutes = require('./api/MyApi/routes');
const F2FAPIRoutes = require('./api/F2Fapi/routes');
// const TODORoutes = require('./todo/routes');
// const path = require('path');
// let dirViews = [path.join(__dirname,'/todo/views')];


// app.set('views',dirViews);
// app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());
app.use(MyAPIRoutes);
app.use(F2FAPIRoutes);



//-------- DB -----------------

const mongoose = require('mongoose');
database = 'mongodb://localhost:27017/food2forkDataBase';
mongoose.connect(database,(err)=>{
    if(err)
        throw err;
    console.log('conneced to the database')
});


app.listen(3000);
console.log("waiting on localhost:3000");