import React, { useState } from 'react'

const ToDoList = () => {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        console.log(newTask);
        if (newTask.trim() === "") return;
        setTasks([...tasks, {id: Date.now(), text: newTask, completed: false}]);
        setNewTask("");
    }

    const toggleTask = (id) => {
        setTasks(tasks.map((task)=>
            task.id === id ? {...task, completed: !task.completed} : task
        ))
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask();
    }
  return (
    <div>
        <h1 className="text-3xl font-bold flex justify-center mt-10 mb-5">To Do List</h1>
        <form className="flex justify-center" onSubmit={handleSubmit}>
            Add Task:
            <input className="border-2 mx-2 pl-1 py-1 rounded" type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button className="bg-green-500 p-1 rounded text-white" onClick={addTask}>Add Task</button>
        </form>
      <ul>
        {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center p-2 border-b">
                <span className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`} onClick={() => toggleTask(task.id)}>{task.text}</span>
                <button className="text-white font-bold p-2 rounded bg-red-500 hover:bg-red-700" onClick={() => deleteTask(task.id)}>Delete Task</button>
                <button className= "" onClick={() => updateTask(task.id)}>Edit</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList
