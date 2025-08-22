// This file defines the routes for the todo application
// and maps them to the controller functions
//         }
//         const updatedTodo = await todo.save();
//         res.json(updatedTodo);
//     } catch (err) {
//         res.status(500).json({ message: 'error updating todo', error: err.message });
//     }
//     res.json({ message: 'Todo deleted successfully' });
// to-do_list_app/todo/server/routes/todos.js
const express = require('express');
const router = express.Router();
const todoController = require('../../controllers/todoController');

router.get('/', todoController.getTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
