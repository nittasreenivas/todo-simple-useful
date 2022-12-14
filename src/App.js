import "./styles.css";
import {useState} from "react"
export default function App() {
  const [todos,setTodos] = useState([])
  const [newTodos,setNewTodos] = useState("")
  const addTask = () => {
    const task = {
      id:todos.length === 0 ? 1 : todos[todos.length-1].id +1,
      taskName:newTodos,
      status:false
    }
    const newList = [...todos,task]
    setTodos(newList)
  }
  const handleDelete = (id) => {
    let newArr = todos.filter((item) => {
      return item.id !== id
    }) 
    setTodos(newArr)
  }
  const handleDone = (id) => {
    let newStr = todos.map((item) => {
      if(item.id === id){
        return{...item,status:true}
      }else {
        return item;
      }
    })
    setTodos(newStr)
  }
  const handleUndo = (id) => {
    let newStr1 = todos.map((item) => {
      if(item.id === id){
        return{...item,status:false}
      }else {
        return item;
      }
    })
    setTodos(newStr1)
  }
  return (
    <div className="App">
     <div>
       <input type="text" value={newTodos} onChange={(e) => setNewTodos(e.target.value)}/>
       <button onClick={addTask}>addTask </button>
        </div>
        <div>
          {
            todos.map((task) => {
              return(
                <div className={task.status === true ? "active" : "dull"}>
                  <span> {task.taskName}</span>
                  {task.status === false ? (
                    <button onClick={() => handleDone(task.id)}> Done </button>
                  ): (
                    <button onClick={() => handleUndo(task.id)}> undo</button>
                  )}
                 
                  
                  <button className="btn" onClick={() =>handleDelete(task.id)}> Delete</button>
                  </div>
              )
            })
          }
          </div>
    </div>
  );
}
