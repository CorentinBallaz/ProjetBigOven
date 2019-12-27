const router = require('express').Router();
const controller = require('../controllers')
// router.get('/api/todos',(req,res)=>{
//     controller.getAllTodos(req,res);
//     // res.send('get todos');
// });
//
// router.get('/api/createTodo',(req,res)=>{
//     controller.getAllTodos(req,res);
//
//     // res.send('get todos');
// });
//
// router.get('/api/todo/:id',(req,res)=>{
//     // controller.getTodo(res,res);
//     controller.getOneTodo(req,res);
//     // res.send(req.params.id);
// });
// router.post('/api/todo',(req,res)=>{
//     // res.send('post a )
//     controller.createTodo(req,res);
// });
// router.put('/api/todo/:id',(req,res)=>{
//     // res.send('update a todo');
//     controller.modifyTodo(req,res);
//    // controller.putTodo(req,res);
// });
// router.delete('/api/delete/todo/:id',(req,res)=>{
//     // res.send('delete a todo');
//     controller.deleteTodo(req,res);
// });
// // Passe done a true
// router.put('/api/todo/done/:id',(req,res)=>{
//     controller.doneTodo(req,res);
// });
//
//
// router.get('/api/delete/todo/:id',(req,res)=>{
//     // res.send('delete a todo');
//     controller.deleteTodo(req,res);
// });
//
// router.put('/api/todo/notdone/:id',(req,res)=>{
//     controller.notDoneTodo(req,res);
// });
//
// router.get('/api/todos/done',(req,res)=>{
//     controller.getTrue(req,res);
// });
// router.get('/api/todos/current',(req,res)=>{
//     controller.getFalse(req,res);
// });
//

router.get('/MyApi/recipes/',(req,res)=>{

    // res.send('Express response');
    controller.getAllRecipes(req,res);
});
router.get('/MyApi/recipe/:id',(req,res)=>{

    // res.send('Express response');
    controller.getRecipe(req,res);
});


router.get('/MyApi/recipes/:research',(req,res)=>{
    controller.getRecipes(req,res);
});
module.exports=router;