import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './components/FormColor';
import DisplayColors from './components/DisplayColors';

function App() {
  const [list, setList] = useState(new Values('white').all(5));

  console.log(list)

  return (
    <div className="App">
      <FormColor setList={setList} />
      <DisplayColors list={list} />
    </div>
  )
}

export default App
