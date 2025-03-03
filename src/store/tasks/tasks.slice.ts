import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { ITask } from "src/model/task"

export interface ITasksState {
	task: ITask | null
}

const initialState: ITasksState = {
	task: null
}

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		setTask: (state, action: PayloadAction<ITask>) => {
			state.task = action.payload
		}
	}
})

export const { setTask } = tasksSlice.actions
export default tasksSlice.reducer
