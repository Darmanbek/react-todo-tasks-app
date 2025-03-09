import type { ParamId, SearchParams } from "src/shared/model/response"
import type { Task, TaskChange } from "src/shared/model/task"
import { api } from "src/shared/store/api"

export const tasksApi = api.injectEndpoints({
	endpoints: (build) => ({
		getTasks: build.query<Task[], SearchParams>({
			query: (params = {}) => ({
				url: `/tasks`,
				method: "GET",
				params
			}),
			providesTags: ["tasks"]
		}),
		addTask: build.mutation<Task, TaskChange>({
			query: (task) => ({
				url: `/tasks`,
				method: "POST",
				body: task
			}),
			invalidatesTags: ["tasks"]
		}),
		editTask: build.mutation<Task, TaskChange>({
			query: (body) => ({
				url: `/tasks/${body.id}`,
				method: "PUT",
				body
			}),
			invalidatesTags: ["tasks"]
		}),
		editTaskImportant: build.mutation<Task, TaskChange>({
			query: (body) => ({
				url: `/tasks/${body.id}`,
				method: "PUT",
				body
			}),
			invalidatesTags: ["tasks"]
		}),
		editTaskCompleted: build.mutation<Task, TaskChange>({
			query: (body) => ({
				url: `/tasks/${body.id}`,
				method: "PUT",
				body
			}),
			invalidatesTags: ["tasks"]
		}),
		deleteTask: build.mutation<void, ParamId>({
			query: (id) => ({
				url: `/tasks/${id}`,
				method: "DELETE"
			}),
			invalidatesTags: ["tasks"]
		})
	})
})
