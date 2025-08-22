function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo._id, !todo.completed)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo._id)}>Delete</button>
        </div>
    );
}
export default TodoItem;
// TodoItem.js
// This component represents a single todo item.
// It displays the todo text, a checkbox to mark it as completed, and a delete button.
// The `onToggle` function is called when the checkbox is clicked, and it toggles the completion status of the todo.
// The `onDelete` function is called when the delete button is clicked, and it removes the todo from the list.
// The `todo` prop is an object that contains the todo's text, completion status, and unique ID.
// The `onToggle` and `onDelete` props are functions passed from the parent component to handle toggling and deleting the todo item.