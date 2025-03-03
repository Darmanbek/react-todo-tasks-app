import { ISearchParams, TParamId } from "src/model/response"
import { ITask, ITaskChange } from "src/model/task"
import { api } from "src/store/api"

export const tasksApi = api.injectEndpoints({
	endpoints: (build) => ({
		getTasks: build.query<ITask[], ISearchParams>({
			query: (params = {}) => ({
				url: `/tasks`,
				method: "GET",
				params
			}),
			providesTags: ["tasks"]
		}),
		addTask: build.mutation<ITask, ITaskChange>({
			query: (task) => ({
				url: `/tasks`,
				method: "POST",
				body: task
			}),
			invalidatesTags: ["tasks"]
		}),
		editTask: build.mutation<ITask, ITaskChange>({
			query: (body) => ({
				url: `/tasks/${body.id}`,
				method: "PUT",
				body
			}),
			invalidatesTags: ["tasks"]
		}),
		editTaskImportant: build.mutation<ITask, ITaskChange>({
			query: (body) => ({
				url: `/tasks/${body.id}`,
				method: "PUT",
				body
			}),
			invalidatesTags: ["tasks"]
		}),
		editTaskCompleted: build.mutation<ITask, ITaskChange>({
			query: (body) => ({
				url: `/tasks/${body.id}`,
				method: "PUT",
				body
			}),
			invalidatesTags: ["tasks"]
		}),
		deleteTask: build.mutation<void, TParamId>({
			query: (id) => ({
				url: `/tasks/${id}`,
				method: "DELETE"
			}),
			invalidatesTags: ["tasks"]
		})
	})
})

export const {} = tasksApi
