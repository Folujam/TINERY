// controller/todoController.js
// Todo Controller
// This file contains the controller functions for handling todo operations
// Import the Todo model

const Todo = require('../server/models/Todo');

// get all todos
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: 'error getting todos', error: err.message });
    }
};

//get single todo by id
exports.getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
    } catch (err) {
        res.status(500).json({ message: 'error getting todo', error: err.message });
    }
};

// create new todo
exports.createTodo = async (req, res) => {
    const { text } =req.body;
    if (!text || text.trim() === '') {
        return res.status(400).json({ message: 'Todo text is required' });
    }
    try {
        const newTodo = new Todo({ text });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(500).json({ message: 'error creating todo', error: err.message });
    }
};

 // update todo by id
 exports.updateTodo = async (req, res) => {
    const { text, completed } = req.body;
    if (!text || text.trim() === '') {
        return res.status(400).json({ message: 'Todo text is required' });
    }
    
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        
        if (!text !== undefined) {
            todo.text = text;
        }
        if (completed !== undefined) {
            todo.completed = completed;
        }
        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    }
    catch (err) {
        res.status(500).json({ message: 'error updating todo', error: err.message });
    }
};

// delete todo by id
exports.deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'error deleting todo', error: err.message });
    }
};
