const router = require('express').Router();
const controller = require('../controllers')


router.get('/MyApi/recipes/',(req,res)=>{

    // res.send('Express response');
    controller.getAllRecipes(req,res);
});
router.get('/MyApi/recipe/:id',(req,res)=>{

    // res.send('Express response');
    controller.getRecipe(req,res);
});
router.post('/MyApi/cart/',(req,res)=>{
	controller.addIngredient(req,res);
});
router.get('/MyApi/cart/',(req,res)=>{
	controller.getCartList(req,res);
});
router.post('/MyApi/cart/delete/',(req,res)=>{
    controller.deleteIngredient(req,res);
});
router.post('/MyApi/favoriRecipes/delete/',(req,res)=>{
    controller.deleteFavoriRecipe(req,res);
});

router.post('/MyApi/favoriRecipes/',(req,res)=>{
	controller.addFavoriRecipe(req,res);
});
router.get('/MyApi/favoriRecipes/',(req,res)=>{
	controller.getFavoriRecipes(req,res);
});
router.delete('/MyApi/cart/deleteAll',(req,res)=>{
    controller.deleteAllIngredient(req,res);
});


router.get('/MyApi/recipes/:research',(req,res)=>{
    controller.getRecipes(req,res);
});
module.exports=router;