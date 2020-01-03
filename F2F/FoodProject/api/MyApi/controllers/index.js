function getAllRecipes(req,res){
    const Recipe = require('../models/recipes');
    Recipe.find({}, function(err, recipes) {

        if (err) throw err;
        console.log(recipes);
        res.json(recipes);
        // res.json({"fdsfsf":"sdds"});
    });
}

function getRecipe(req,res){
    const Recipe = require('../models/recipes');

    Recipe.find({_id : req.params.id}, function(err, recipe) {

        if (err) throw err;

        res.json(recipe);

    });
}

function addIngredient(req, res) {
  const Cart = require('../models/carts');

  const newIngredient = Cart ({
      ingredient: req.body.name
  });
  console.log(req.body);
  newIngredient.save(function(err) {
    if (err) throw err;
    res.json({info: 'Success'});

  });

}

function deleteIngredient(req, res) {
  const Todo = require('../models/carts');

  console.log("delete in progress for ingredient : ",req.body.ingredient);

  Todo.findOneAndRemove(
        {ingredient : req.body.ingredient}, function(err, todo) {
    if (err) throw err;

    res.json({info: 'Success'});

  });
}

function deleteAllIngredient(req,res) {
  const Todo = require('../models/carts');
  console.log("Deleting all ingredients from cart");
  Todo.deleteMany(
    {},function(err,todo) {
      if (err) throw err;
      res.json({info : 'Success, all ingredients removed'});
    });
}

function getCartList(req,res){
    const Cart = require('../models/carts');
    Cart.find({},function(err,cart) {
        if (err) throw err;
        res.json(cart);
    });
}


function getFavoriRecipes(req,res){
    const FavoriRecipe = require('../models/favoriRecipes');
    FavoriRecipe.find({},function(err,favoriRecipes) {
        if (err) throw err;
        res.json(favoriRecipes);
    });
}

function addFavoriRecipe(req, res) {
  const favoriRecipe = require('../models/favoriRecipes');
  const newFavoriRecipe = favoriRecipe ({
      id : req.body.id
  });

  newFavoriRecipe.save(function(err) {
    if (err) throw err;
    res.json({info: 'Success'});

  });

}

function deleteFavoriRecipe(req, res) {
  const Todo = require('../models/favoriRecipes');
  console.log("delete in progress for this recipe : ",req.body);
  Todo.findOneAndRemove(
        {id : req.body.id}, function(err, todo) {
    if (err) throw err;
    res.json({info: 'Success'});

  });
}



function getRecipes(req,res){

    const Recipe = require('../models/recipes');
    Recipe.find({'recipe.title':{$regex :new RegExp(req.params.research), $options: 'i' }}, function(err, recipes) {

        if (err) throw err;

        res.json(recipes);
        // res.json({"fdsfsf":"sdds"});
    });
}


module.exports.getAllRecipes=getAllRecipes;
module.exports.getRecipe = getRecipe;
module.exports.addIngredient=addIngredient;
module.exports.getCartList=getCartList;
module.exports.getFavoriRecipes=getFavoriRecipes;
module.exports.addFavoriRecipe=addFavoriRecipe;
module.exports.deleteIngredient=deleteIngredient;
module.exports.deleteAllIngredient=deleteAllIngredient;
module.exports.deleteFavoriRecipe=deleteFavoriRecipe;
module.exports.getRecipes = getRecipes;