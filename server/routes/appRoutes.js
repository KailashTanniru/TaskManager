const { Router } = require('express')

const router = Router();
const appController= require('../controllers/appController')




router.get('/getTodos',appController.tododata_read);

router.post('/addTodo',appController.tododata_create);

router.delete('/deleteTodo',appController.tododata_delete);

router.put('/updateTodo',appController.tododata_update);

module.exports = router