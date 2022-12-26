import React, { useState } from 'react'
import './css/index.css'
import { NavLink } from 'react-router-dom'
export default function Navbar(props) {
	
	let count = props.value.length
	let {delet,value,text,emitHandle} = props;
	const [lili, setlili] = useState([...value])
	const dele = ()=>{
		value.map((item,index)=>{
			console.log(item);
			props.delet(index)
		})
		// console.log(6);
	}
  return (
    <div>
      <footer className="footer">
					<span className="todo-count">{count} items left</span>
					<ul className="filters">
						<li>
							{/* <a href="#/" className="selected">All</a> */}
							<NavLink to = '/' className={({isActive})=>isActive?'selected':''}>All</NavLink>
						</li>
						<li>
						    {/* <a href="#/active">Active</a> */}
							<NavLink to = '/active' className={({isActive})=>isActive?'selected':''}>Active</NavLink>
						</li>
						<li>
						    {/* <a href="#/completed">Completed</a> */}
							<NavLink to = '/completed' className={({isActive})=>isActive?'selected':''}>Completed</NavLink>
						</li>
					</ul>
					
					<button className="clear-completed"  onClick={()=>emitHandle(1)}>Clear completed</button>
		</footer>
    </div>
  )
}
