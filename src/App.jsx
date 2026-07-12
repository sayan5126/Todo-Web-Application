import { useEffect, useState } from 'react'
import {TodoContextProvider , } from './context/index.js'

function App() {
  const [todos , setTodos] = useState([])

  const addTodo = (todo) => {   // Adds a new todo with a unique timestamp-based ID and prepends it to the existing todo list.
    setTodo((oldTodos) => [{id : Date.now() , ...todo} , ...oldTodos])
  }

  const updateTodo = (id,todo) => {   // Updates the todo matching the given ID by mapping through the existing list and replacing only the matched todo while keeping all other todos unchanged.
    setTodo((oldTodos) => oldTodos.map((oldTodo)=> (oldTodo.id === id) ? todo : oldTodo));
  }

  const deleteTodo = (id) => {    // Deletes the todo matching the given ID by filtering it out of the existing list while keeping all other todos unchanged.
    setTodo((oldTodos) => oldTodos.filter((oldTodo)=> oldTodo.id !== id))
  }

  const toggleCompleted = (id) => {   // Toggles the completed status of the todo matching the given ID by creating a new updated object while leaving all other todos unchanged.
    setTodo((oldTodos)=> oldTodos.map((oldTodo)=> (oldTodo.id === id) ? {...oldTodo,completed: !oldTodo.completed} : oldTodo))
  }
  
  // Runs once when the component mounts to load saved todos from localStorage, converts the stored JSON string back into an array, and restores it to state only if valid todos exist.
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos);
    }
  },[])

  // Runs every time the todos state changes and saves the updated todo list to localStorage by converting the array into a JSON string, ensuring data persists even after the page is refreshed or reopened.
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  
  return (
    <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleCompleted}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
