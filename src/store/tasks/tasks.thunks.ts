import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "src/api"
import type { SearchParams } from "src/model/response"
import type { ITask } from "src/model/task"
import { addNewTask } from "./tasks.slice"

const handleError = (e: unknown, rejectWithValue: (value: unknown) => unknown) => {
	const error = e as Error
	return rejectWithValue(error.message)
}

export const getTasks = createAsyncThunk<ITask[], SearchParams | undefined>(
	"tasks/getTasks",
	async (filters: SearchParams = {}, { rejectWithValue }) => {
		try {
			const response = await api.get(`/tasks`, {
				params: filters.search
					? {
							search: filters.search
						}
					: {}
			})
			if (response.status === 200) {
				return response?.data
			}
			return []
		} catch (e) {
			return handleError(e, rejectWithValue)
		}
	}
)

export const addTask = createAsyncThunk(
	"tasks/addTask",
	async (newTask: ITask, { rejectWithValue, dispatch }) => {
		try {
			const response = await api.post("/tasks", newTask)
			if (response.status === 201) dispatch(addNewTask(response.data))
		} catch (e) {
			return handleError(e, rejectWithValue)
		}
	}
)
