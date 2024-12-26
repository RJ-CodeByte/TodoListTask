
// todoDataSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { generateId } from '../utils';

export interface ITodo {
  id: string;
  title: string;
  description: string;
  status: string;
  isActive: boolean;
  file?: FileType; 
  comments: string;
}
export interface ITodoData {
  todos: ITodo[];
}

const initialState: ITodoData = {
  todos: [],
};

const todoDataSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITodo>) => {
      let todoList=[...state.todos];
      todoList.push(action.payload);
      return {
        ...state,
        todos: todoList
      };
    },
    editTask: (state, action: PayloadAction<Partial<ITodo> >) => {      
      const taskIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (taskIndex !== -1) {
        state.todos[taskIndex] = {
          ...state.todos[taskIndex],
          ...action.payload,
        };
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  
});

export default todoDataSlice.reducer;
export const todoDataSliceAction = todoDataSlice.actions;