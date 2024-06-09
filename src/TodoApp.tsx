import { useState } from 'react';
import { ListTasks } from './ListTasks';

export const TodoApp = () => {

  const [newTask, setNewTask] = useState<string>('')
  const [listTasks, setListTasks] = useState<string[]>([])
  const handleAddTask = () => {
    if (newTask.trim() === "") return
    setListTasks(taskLast => [...taskLast, newTask])
    setNewTask('')
  }
  const handleDeleteTask = (index:number) => {
    setListTasks(tasks => tasks.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h1>Lista Tareas</h1>
      <input 
      type="text" 
      placeholder='Nueva Trea'
      value={newTask} 
      onChange={(e) => setNewTask(e.target.value)}
      />
      <button className='btn' onClick={handleAddTask}>Add Task</button>
      <ListTasks listTasks={listTasks} deleteTask={handleDeleteTask}></ListTasks>
    </div>
  )
}
