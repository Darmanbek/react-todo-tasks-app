import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query/react"
import drawer from "./drawer/drawer.slice"
import modal from "./modal/modal.slice"
import mode from "./mode/mode.slice"
import search from "./search/search.slice"
import { tasksApi } from "./tasks/tasks.api"
import tasks from "./tasks/tasks.slice"

export const store = configureStore({
	reducer: {
		drawer,
		modal,
		mode,
		search,
		tasks,
		[tasksApi.reducerPath]: tasksApi.reducer
	},
	devTools: process.env.NODE_ENV !== "production",
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tasksApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
