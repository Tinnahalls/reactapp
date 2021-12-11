import { useState} from 'react'
import Header from "./componenets/Header";
import Tasks from "./componenets/Tasks";
import AddTask from "./componenets/AddTask";

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 2 ',
      reminder: true
    },

    {
      id: 4,
      text: 'Swimming Practice',
      day: 'Feb 25',
      reminder: true
    },
    {
      id: 3,
      text: 'Volleyball',
      day: 'Feb 445 ',
      reminder: true
    }
  ])
// Add Task
const addTask = (task) => {
 const id = Math.floor(Math.random() * 10000) +1

 const newTask = {id, ...task}
 setTasks([...tasks, newTask])
}


// Delete Task 

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder 

const toggleReminder = (id) => {
  setTasks
  (tasks.map((task) => task.id === id ? { ...task, reminder: ! task.reminder} : task))
}
  
  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask} />
      } 
       
      {tasks.length > 0 ? (
     <Tasks 
     tasks= {tasks}  
     onDelete={deleteTask} 
     onToggle={toggleReminder}
     />
     ) : (
       'No tasks to Show'
     )}
   </div> 
  );
}

export default App;
