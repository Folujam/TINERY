//mongoose model, schema for a todo item
// to-do_list_app/todo/server/models/Todo.js
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;