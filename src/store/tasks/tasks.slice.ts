import { type ActionReducerMapBuilder, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { ITask } from "src/model/task"
import { addTask, getTasks } from "./tasks.thunks"

export interface ITasksState {
	tasks: ITask[]
	category: string
	loading: boolean
	error: string | null
}

const initialState: ITasksState = {
	tasks: [],
	category: "/",
	loading: false,
	error: null
}

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addNewTask: (state, { payload }: PayloadAction<ITask>) => {
			state.tasks.push(payload)
		}
	},
	extraReducers: (builder: ActionReducerMapBuilder<ITasksState>) => {
		builder
			.addCase(getTasks.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(getTasks.fulfilled, (state, { payload }) => {
				state.tasks = payload
				state.loading = false
			})
			.addCase(getTasks.rejected, (state, { payload }) => {
				state.loading = false
				state.error = payload as string
			})
			.addCase(addTask.rejected, (state, { payload }) => {
				state.loading = false
				state.error = payload as string
			})
	}
})

export const { addNewTask } = tasksSlice.actions
export default tasksSlice.reducer
