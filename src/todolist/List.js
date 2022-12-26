import { useState } from "react"
import React from 'react'
import '../todolist/css/index.css'
import Navbar from "./Navbar"

export default function List(props) {
  
  const [list, setlist] = useState([])
  const [idx, setidx] = useState(1)
  let form = [...list];
  const inputref = React.createRef()
  
  if (props.value === 1) {
    form = list.filter((item)=>{
      return item.state
    })
  } else if(props.value === 0) {
    form = list.filter((item)=>{
      return !item.state
    })
  }

	
  function change(item,index) {
    let newlist =[...list]
    newlist.splice(index,1,{con:item.con, idx:item.idx, state:item.state,change:!item.change})
    // console.log(newlist);
    setlist(newlist)
    // console.log(newlist);
  }
  function check(item,index) {
    let newlist =[...list]
    newlist.map((it,inde)=>{
      if (item.idx===it.idx) {
        newlist.splice(inde,1,{con:item.con, idx:item.idx, state: !item.state,change:item.change})
        console.log(newlist);
        setlist(newlist)
      }
    })
    
   
  }
   const handledel = (index)=> {
    let newlist = [...list];
    newlist.splice(index,1)
    setlist(newlist)
    
  }
 
 
  onkeydown = (e)=>{
		if (e.keyCode === 13) {
			if(inputref.current.value) {
        setidx(idx+1)
        setlist([...list,{con:inputref.current.value,idx:idx,state:true,change:false}])
        inputref.current.value =''
        // console.log(idx);
      }
		}
	}
 
  const getHandle = () => {
    setlist(list.filter((item)=>{
    return item.state
  }))
 }


  return (
    <div>
     
      <input className="new-todo" placeholder="What needs to be done?" autoFocus ref={inputref} onKeyDown={(e)=>onkeydown(e)}   onBlur={
    (e)=>{
     if(e.target.value) {
       setidx(idx+1)
       setlist([...list,{con:e.target.value,idx:idx,state:true,change:false}])
       e.target.value =''
       // console.log(idx);
     }
 }
 }/>
       {list.length ? ( 
        <div className='main' onClick={()=>{
          let newlist =[...list]
          newlist.map((item,index)=>{
            newlist.splice(index,1,{con:item.con,idx:item.idx,state:false,change:item.change})
            
          })
          setlist(newlist)
          }}>
          <input id="toggle-all" className="toggle-all" type="checkbox"/>
          <label htmlFor="toggle-all">Mark all as complete</label>
        </div>
       ):''}  
      <ul className="todo-list">
        {form.map((item,index)=>{
          // console.log(item.idx);
            return (
              <li key={index}  id={item.idx} className={item.state?'':'completed'}>
                
                  <div className="view" >
                      <input className="nocheck toggle" type='checkbox' onClick={
                        ()=> {
                          check(item,index)

                        }
                        }></input>
                      <label className={item.state?'nocheck':'checked'} onDoubleClick={()=>{
                        document.getElementById(`${item.idx}`).classList.add('editing');
                       
                        change(item,index)
                      }}>{item.con}</label>
                      
                      <button onClick={()=>{
                        return handledel(index)
                        }} className='destroy'></button>
                        
                  </div>
                  <input className={item.change?'edit':'dis'} defaultValue={item.con}   onBlur={(e)=>{
                    let newlist = [...list]
                    newlist.map((ite,index)=>{
                    if(ite.idx===item.idx)
                    newlist.splice(index,1,{con:e.target.value,idx:item.idx,state:item.state,change:!item.change})
                    setlist(newlist)
                })         
                document.getElementById(`${item.idx }`).classList.remove('editing');
                  }}></input>
                  
              </li>
            )
          })}
      </ul>
      {list.length?<Navbar value = {list}  emitHandle={getHandle}></Navbar>:''}
    </div>
  )
}
