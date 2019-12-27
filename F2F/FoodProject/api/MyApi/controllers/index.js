// function getTodos(req,res) {
//     res.send('get Todos');
// }
//
// module.exports.getTodos=getTodos;
//
// function getTodo(req,res) {
//     res.send(' get todo');
// }
// module.exports.getTodo=getTodo;
//
// function postTodo(req,res){
//     res.send('post todo');
// }
//
// module.exports.postTodo=postTodo;
//
// function putTodo(req,res) {
//     res.send('update todo');
// }
//
// module.exports.putTodo=putTodo;
//
// function deleteTodo(req,res) {
//     res.send('delete todo');
// }
//
// module.exports.deleteTodo=deleteTodo;


// function getAllTodos(req, res) {
//     const Todo = require('../../../../../../FirstProject/firstTestCode/todo/models');
//
//     Todo.find({}, function(err, todos) {
//
//         if (err) throw err;
//
//         res.json(todos);
//
//     });
//
// }
//
// function getOneTodo(req, res) {
//     const Todo = require('../../../../../../FirstProject/firstTestCode/todo/models');
//
//     Todo.find({_id : req.params.id}, function(err, todo) {
//
//         if (err) throw err;
//
//         res.json(todo);
//
//     });
//
// }
//
// function createTodo(req, res) {
//     const Todo = require('../../../../../../FirstProject/firstTestCode/todo/models');
//
//     const newTodo = Todo ({
//         title: req.body.title,
//             description : req.body.description
//     });
//
//     newTodo.save(function(err) {
//         if (err) throw err;
//
//         res.json({info: 'Success'});
//
//     });
//
// }
//
// function modifyTodo(req, res) {
//     const Todo = require('../../../../../../FirstProject/firstTestCode/todo/models');
//
//     Todo.findOneAndUpdate(
//         {_id : req.params.id},
//
//         { title: req.body.title,
//             description : req.body.description
//
//         }, function(err, todo) {
//             if (err) throw err;
//
//             res.json({info: 'Success'});
//
//         });
//
// }
//
// function deleteTodo(req, res) {
//     const Todo = require('../../../../../../FirstProject/firstTestCode/todo/models');
//
//     Todo.findOneAndRemove(
//         {_id : req.params.id}, function(err, todo) {
//             if (err) throw err;
//
//             res.json({info: 'Success'});
//
//         });
// }
//
// function doneTodo(req,res){
//     const Todo = require('../../../../../../FirstProject/firstTestCode/todo/models');
//
//     Todo.findOneAndUpdate(
//         {_id : req.params.id},
//
//         {done: true
//
//         }, function(err, todo) {
//             if (err) throw err;
//
//             res.json({info: 'Success'});
//
//         });
// }
//
// function notDoneTodo(req,res){
//     const Todo = require('../../../../../../FirstProject/firstTestCode/todo/models');
//
//     Todo.findOneAndUpdate(
//         {_id : req.params.id},
//
//         {done: false
//
//         }, function(err, todo) {
//             if (err) throw err;
//
//             res.json({info: 'Success'});
//
//         });
// }
//
// function getTrue(req,res){
//     const Todo = require('../../../../../../FirstProject/firstTestCode/todo/models');
//
//     Todo.find({done:true}, function(err, todos) {
//
//         if (err) throw err;
//
//         res.json(todos);
//
//     });
// }
// function getFalse(req,res){
//     const Todo = require('../../../../../../FirstProject/firstTestCode/todo/models');
//
//     Todo.find({done:false}, function(err, todos) {
//
//         if (err) throw err;
//
//         res.json(todos);
//
//     });
// }
// module.exports.getFalse = getFalse;
// module.exports.getTrue = getTrue;
// module.exports.getAllTodos = getAllTodos;
// module.exports.getOneTodo = getOneTodo;
// module.exports.createTodo = createTodo;
// module.exports.modifyTodo = modifyTodo;
// module.exports.deleteTodo = deleteTodo;
// module.exports.doneTodo=doneTodo;
// module.exports.notDoneTodo=notDoneTodo;


function getAllRecipes(req,res){
    const Recipe = require('../models');
    Recipe.find({}, function(err, recipes) {

        if (err) throw err;

        res.json(recipes);
        // res.json({"fdsfsf":"sdds"});
    });
}

function getRecipe(req,res){
    const Recipe = require('../models');

    Recipe.find({_id : req.params.id}, function(err, recipe) {

        if (err) throw err;

        res.json(recipe);

    });
}

function getRecipes(req,res){

    const Recipe = require('../models');
    Recipe.find({'recipe.title':{$regex :new RegExp(req.params.research), $options: 'i' }}, function(err, recipes) {

        if (err) throw err;

        res.json(recipes);
        // res.json({"fdsfsf":"sdds"});
    });
}


module.exports.getAllRecipes=getAllRecipes;
module.exports.getRecipe = getRecipe;
module.exports.getRecipes = getRecipes;