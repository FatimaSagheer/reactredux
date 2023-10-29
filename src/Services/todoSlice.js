import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{
    id:1,
    text:'Hello'
  }],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // payload == data
    addTodo: (state, action) => {
      const todo = { 
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
       
        state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
      },
  },
});

export const {addTodo,removeTodo} =todoSlice.actions
// this line will wired up to the store 
export default todoSlice.reducer