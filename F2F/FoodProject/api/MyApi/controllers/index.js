function getAllRecipes(req,res){
    const Recipe = require('../models/recipes');
    Recipe.find({}, function(err, recipes) {

        if (err) throw err;
        console.log(recipes);
        res.json(recipes);

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

function getCartList(req,res){
    const Cart = require('../models/carts');
    Cart.find({},function(err,cart) {
        if (err) throw err;
        res.json(cart);
    });
}

function addFavoriRecipe(req, res) {
  console.log("testAV");
  const favoriRecipe = require('../models/favoriRecipes');
  console.log("test1");
  console.log(req.body);

  const newFavoriRecipe = favoriRecipe ({
      id : req.body.id
  });


  newFavoriRecipe.save(function(err) {
    if (err) throw err;
    res.json({info: 'Success'});

  });

}

function getFavoriRecipes(req,res){
    const FavoriRecipe = require('../models/favoriRecipes');
    FavoriRecipe.find({},function(err,favoriRecipes) {
        if (err) throw err;
        res.json(favoriRecipes);
    });
}


module.exports.getAllRecipes=getAllRecipes;
module.exports.getRecipe = getRecipe;
module.exports.addIngredient=addIngredient;
module.exports.getCartList=getCartList;
module.exports.getFavoriRecipes=getFavoriRecipes;
module.exports.addFavoriRecipe=addFavoriRecipe;
