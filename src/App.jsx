import React, { useState } from 'react'
import TaskForm from './Components/TaskForm'
import TaskItem from './Components/TaskItem'
import TaskList from './Components/TaskList'



function App() {
  const [tasks, setTasks] = useState([])

  function AddTask(task){
    setTasks([...tasks, task])
  }
  function deleteTask (id){
    setTasks(tasks.filter(task => task.id !== id))
  }

  return(
    <div>
      <h1>To Do List</h1>
      <TaskForm onSubmit = {AddTask}/>
      <TaskList>
        {tasks.map(task => (
            <TaskItem
              key = {task.id}
              id = {task.id}
              title = {task.title}
              onClick = {deleteTask}
          />
        ))}
        </TaskList>

    
    </div>
  )
}

export default App
