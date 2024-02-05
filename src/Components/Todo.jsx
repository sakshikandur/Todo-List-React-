
import './css/Todo.css'
const Todo = () => {
  return (
    <div className='todo'>
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
            <input type="text" placeholder='Add your Task' className='todo-input' />
            <div className="todo-add-btn">ADD</div>
        </div>
      <div className="todo-list">

      </div>
    </div>
  )
}

export default Todo
