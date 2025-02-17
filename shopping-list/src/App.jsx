// Step 4. Import React and useState
import React, {useState} from 'react';

// Step 5. Import the App.css file
import './App.css';

// Step 6. Create a functional component called App
export default function App() {
    // Step 8a. Initialize useState state variables
    const [tasks, setTasks] = useState([]);
    const[inputValue, setInputValue] = useState('');
    
    // Step 8b. Create arrow function 'handleInputChange to store the current user input
   const handleInputChange = (e) => {
    setInputValue(e.target.value);
   };
    
    // Step 9. Create arrow function 'handleAddTask' to add tasks to the list
    const handleAddTask = () => {
        if (inputValue.trim()) {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };

    // Step 11. Create arrow function 'handleDeleteTask' with parameter 'index' to delete tasks
    const handleDeleteTask= (index) => {
        // Step 11a. Create a new list of items to keep
        const newTaskList = tasks.filter((task, i) => i !== index);
        // Step 11b. Set the list to our new list
        setTasks(newTaskList);
    };

    // Step 7. Return the JSX for the App component
    return (
        // Step 7a. Create a div with className 'list' and create a site header
        <div className = 'list'>
            <h1>Shopping List</h1>
            {/* Step 7b. Create a div with className 'text' and create an input field with:
            type 'text' 
            value inputValue
            onChange set to handleInputChange
            placeholder to any placeholder text
            */}
            <div className = 'input'>
                <input
                    type = "text"
                    value = {inputValue}
                    onChange={handleInputChange}
                    placeholder = "Add a new task"
                />
                <button onClick = {handleAddTask}>Add</button>
            </div>
            {/* Step 10. Display the shopping list array */}
            <ul>
                {/* Step 10a. Iterate over every task and retrieve its index*/}
                {tasks.map((task, index) => (
                    <li key = {index} className = 'task-item'>
                        {task}
                        {/**/}
                        <div class = "task-actions">
                           <button onClick={() => handleDeleteTask(index)}>Purchase</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>      
    );            
}
