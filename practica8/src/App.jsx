import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Day from './components/Day'
import Form from './components/Form'
import ListTasks from './components/ListTasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1 className="text-4xl">Todo List</h1>
      <div className="bg-gray03">
        <Header />
        <Day />
        <Form />
        <ListTasks />
      </div>
    </main>
  )
}
export default App

