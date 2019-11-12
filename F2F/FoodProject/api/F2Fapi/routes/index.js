

const router = require('express').Router();
const controller = require('../controllers');

router.get('/F2Fapi/recipesList/',(req,res)=>{
    controller.getRecipesList(req,res);
});

router.get('/F2Fapi/recipe/:id',(req,res)=>{
    controller.getRecipeById(req,res);
});

router.get('/F2Fapi/recipesResearchList/:query',(req,res)=>{
   controller.getRecipesResearchList(req,res);
});

module.exports=router;
