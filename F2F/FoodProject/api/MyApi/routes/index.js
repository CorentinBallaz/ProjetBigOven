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

module.exports=router;