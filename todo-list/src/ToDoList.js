import { useState } from "react";



function ToDoList(props){
    return (
        <div> 

            <ul>
                {props.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>            
    );
}

export default ToDoList;
