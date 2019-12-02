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


module.exports.getAllRecipes=getAllRecipes;
module.exports.getRecipe = getRecipe;
module.exports.addIngredient=addIngredient;
module.exports.getCartList=getCartList;