const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const APIRoutes = require('./api/MyApi/routes/');

const TODORoutes = require('./todo/routes');
const path = require('path');
let dirViews = [path.join(__dirname,'/todo/views')];


app.set('views',dirViews);
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());
app.use(APIRoutes);
app.use(TODORoutes);
//-------- DB -----------------

const mongoose = require('mongoose');
database = 'mongodb://localhost:27017/todo';
mongoose.connect(database,(err)=>{
    if(err)
        throw err;
    console.log('conneced to the database')
});







// app.get('/',(req,res)=>{
//     res.send('Express response');
// });



app.listen(3000);
console.log("waiting on localhost:3000");