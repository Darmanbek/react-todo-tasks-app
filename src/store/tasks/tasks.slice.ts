import {
	type ActionReducerMapBuilder,
	createAsyncThunk,
	createSlice,
	type PayloadAction
} from "@reduxjs/toolkit"
import dayjs from "dayjs"
import { api } from "src/api"
import type { SearchParams } from "src/model/response"
import type { ITaskState } from "src/model/task"

const handleError = (e: unknown, rejectWithValue: (value: unknown) => unknown) => {
	const error = e as Error
	return rejectWithValue(error.message)
}

export const getTasks = createAsyncThunk<ITaskState[], Record<string, unknown>>(
	"tasks/getTasks",
	async (filters: SearchParams = {}, { rejectWithValue }) => {
		const categoryFilter = (task: ITaskState) => {
			switch (filters.category) {
				case "today":
					return task.date === dayjs().format("YYYY-MM-DD")
				case "important":
					return task.important
				case "completed":
					return task.completed
				case "uncompleted":
					return !task.completed
				default:
					return true
			}
		}

		try {
			const response = await api.get(`/tasks`, {
				params: filters.search
					? {
							search: filters.search
						}
					: {}
			})

			if (response.status === 200) {
				return response.data.filter(categoryFilter)
			}
			return []
		} catch (e) {
			return handleError(e, rejectWithValue)
		}
	}
)

export const addTask = createAsyncThunk(
	"tasks/addTask",
	async (newTask: ITaskState, { rejectWithValue, dispatch }) => {
		try {
			const response = await api.post("/tasks", newTask)
			if (response.status === 201) dispatch(addTask(response.data))
		} catch (e) {
			return handleError(e, rejectWithValue)
		}
	}
)

export interface TasksState {
	tasks: ITaskState[]
	category: string
	loading: boolean
	error: string | null
}

const initialState: TasksState = {
	tasks: [],
	category: "/",
	loading: false,
	error: null
}

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addNewTask: (state, { payload }: PayloadAction<ITaskState>) => {
			state.tasks.push(payload)
		},
		setCategory: (state, { payload }: PayloadAction<string>) => {
			state.category = payload
		}
	},
	extraReducers: (builder: ActionReducerMapBuilder<TasksState>) => {
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
	}
})

export const { setCategory, addNewTask } = tasksSlice.actions

export default tasksSlice.reducer
