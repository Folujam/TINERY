import React, { useEffect, useState } from 'react';
import TodoItem from '../components/TodoItem';
import api from '../services/api';

function TodoListPage() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const res = await api.get('/todos');
        setTodos(res.data);
    };

    const handleAdd = async () => {
        if (!newTodo.trim()) return;
        const res = await api.post('/todos', { text: newTodo });
        setTodos([...todos, res.data]);
        setNewTodo('');
    };

    const handleToggle = async (id, completed) => {
        const updated = await api.put(`/todos/${id}`, { completed });
        setTodos(todos.map(todo => todo._id === id ? updated.data : todo));
    };

    const handleDelete = async (id) => {
        await api.delete(`/todos/${id}`);
        setTodos(todos.filter(todo => todo._id !== id));
    };

    return (
        <div>
            <h1>My Todo List</h1>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            {todos.map(todo => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
}
export default TodoListPage;
// TodoListPage.js
// This file is part of a simple Todo List application using React.
// It fetches todos from an API, allows adding new todos, toggling their completion status, and deleting them.
// The component uses React hooks for state management and side effects.
// The TodoItem component is used to render each individual todo item.
// The API service is abstracted in a separate file for cleaner code organization.
// The application is designed to be simple and easy to understand, focusing on core React concepts.
// The TodoListPage component is the main page for managing todos.