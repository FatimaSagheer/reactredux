import react, { useState } from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../Services/todoSlice";
const AddTodo = () => {
  const [ input, setInput ] = useState('');
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    console.log(e)
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div >
      <form onSubmit={addTodoHandler} 
      className="bg-rose-500 p-6 mb-6 ml-40 mr-40 mt-6">
      <div className="text-white text-5xl mb-6" > Add Todo</div>
      <input
        type="text"
        value={input}
        className="px-2 mr-4 border-4"
        onChange={(e) =>setInput(e.target.value)}
        placeholder="Todo"
      />
      <button type="submit" 
      className="py-2 px-4 bg-rose-700 text-white font-semibold rounded-lg shadow-md 
      hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">AddTodo</button>
    </form>
    </div>
  );
};
export default AddTodo;
