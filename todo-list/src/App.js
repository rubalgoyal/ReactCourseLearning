import { useState } from "react"
import ToDoList from "./ToDoList"

function App(){
    const[tasks, setTasks] = useState([]);
    const[taskInput, setTaskInput] = useState('');

    const handleTaskInputChange = (event) => {
        setTaskInput(event.target.value);
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if(taskInput.trim() !== ""){
            setTasks([...tasks, taskInput]);
            setTaskInput("");
            console.log("task added")      
        }
        
        
    };
    const handleClick2 = () => {
        setTasks(tasks.slice(0, tasks.length -1));
        console.log("task removed")
    }

    const handleRemove = (index) => {
        setTaskInput(tasks.filter((_, i) => i !== index));
        console.log("task removed")
    }

    
    return (
        <div className="title">
            <div>To-Do List</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type = "text"
                        value={taskInput}
                        onChange={handleTaskInputChange}
                        placeholder="Enter text"
                    />
                    <button type="submit">Add Task</button>
                </form>    
            </div>
            <div>
                <button onClick={handleClick2}> Remove Task</button>
            </div>
            <ToDoList tasks={tasks}/>
        
        </div>
    );

}

export default App;