import './css/index.css'
import Route from './router/Route'
import React, { useState } from 'react'



export default function App() {
    const [lists, setlists] = useState([])
    console.log(lists);
  return (
    <div>
        <header className="header">
            <h1>todos</h1>
        </header>
        <Route></Route>
    </div>
  )
}
