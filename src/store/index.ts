import { configureStore } from "@reduxjs/toolkit"
import drawer from "./drawer/drawer.slice"
import modal from "./modal/modal.slice"
import mode from "./mode/mode.slice"
import tasks from "./tasks/tasks.slice"

export const store = configureStore({
	reducer: {
		mode,
		drawer,
		tasks,
		modal
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
