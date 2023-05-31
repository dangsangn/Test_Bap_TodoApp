import { createSlice } from "@reduxjs/toolkit"
import { ITodo } from "../../types"

interface Props {
  tasks: ITodo[]
}

const initialState: Props = {
  tasks: [],
}

export const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getAllTasks: (state, action) => {
      state.tasks = action.payload
    },
    updateTask: (state, action) => {
      const newTasks = state.tasks
      const index = newTasks.findIndex(
        (task: ITodo) => task.id === action.payload.id
      )
      if(index !== -1) {
        newTasks[index] = { ...newTasks[index], ...action.payload }
      }
      state.tasks = newTasks
    },
    deleteTask: (state, action)=>{
      const newListTasks = state.tasks.filter((task:ITodo)=> task.id !== action.payload)
      state.tasks = newListTasks
    }
  },
})

export const { getAllTasks, updateTask, deleteTask } = tasks.actions

export default tasks.reducer
