import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Task } from "src/shared/model/task"

export interface TasksState {
	task: Task | null
}

const initialState: TasksState = {
	task: null
}

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		setTask: (state, action: PayloadAction<Task>) => {
			state.task = action.payload
		}
	}
})

export const { reducer: tasks, actions: tasksActions } = tasksSlice
