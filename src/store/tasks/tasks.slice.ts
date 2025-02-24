import {
	type ActionReducerMapBuilder,
	createAsyncThunk,
	createSlice,
	type PayloadAction
} from "@reduxjs/toolkit"
import { api } from "src/api"
import type { ITaskState } from "src/model/task"

const getFilterResponse = (category: string) => {
	switch (category) {
		case "important":
			return "?important=true"
		case "completed":
			return "?completed=true"
		case "uncompleted":
			return "?completed=false"
		default:
			return "/"
	}
}

const getToday = () => {
	const date = new Date()
	let dd: string | number = date.getDate()
	let mm: string | number = date.getMonth() + 1
	const yyyy: number = date.getFullYear()
	dd = dd < 10 ? "0" + dd : dd
	mm = mm < 10 ? "0" + mm : mm

	return yyyy + "-" + mm + "-" + dd
}

export const getTasks = createAsyncThunk<ITaskState[], string>(
	"tasks/getTasks",
	async (category: string, { rejectWithValue, dispatch }) => {
		dispatch(setCategory("/" + category))
		const filters = getFilterResponse(category)
		try {
			const response = await api.get(`/tasks${filters}`)

			if (response.status === 200) {
				if (category === "today") {
					const today = getToday()
					return response.data.filter((el: ITaskState) => el.date === today)
				}
				return response.data
			}
		} catch (e) {
			const error = e as Error
			return rejectWithValue(error.message)
		}
	}
)

export const addTask = createAsyncThunk(
	"tasks/addTask",
	async (newTasks: ITaskState, { rejectWithValue, dispatch }) => {
		try {
			const response = await api.post("/tasks", newTasks)

			if (response.status === 201) {
				dispatch(addNewTask(response.data))
			}
		} catch (e) {
			const error = e as Error
			return rejectWithValue(error.message)
		}
	}
)

export interface ITasksState {
	tasks: ITaskState[]
	category: string
	loading: string
	error: string | null
}

const initialState: ITasksState = {
	tasks: [],
	category: "/",
	loading: "",
	error: null
}

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addNewTask: (state, { payload }: PayloadAction<ITaskState>) => {
			state.tasks = [...state.tasks, payload]
		},
		setCategory: (state, { payload }: PayloadAction<string>) => {
			state.category = payload
		}
	},
	extraReducers: (builders: ActionReducerMapBuilder<ITasksState>) => {
		builders.addCase(getTasks.pending, (state: ITasksState) => {
			state.loading = "pending"
			state.error = null
		}),
			builders.addCase(
				getTasks.fulfilled,
				(state: ITasksState, { payload }: PayloadAction<ITaskState[]>) => {
					state.tasks = payload
					state.loading = "fulfilled"
					state.error = null
				}
			),
			builders.addCase(getTasks.rejected, (state: ITasksState, { payload }: PayloadAction<any>) => {
				state.loading = "rejected"
				state.error = payload
			})
	}
})

export const { setCategory, addNewTask } = tasksSlice.actions

export default tasksSlice.reducer
