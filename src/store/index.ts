import { configureStore } from "@reduxjs/toolkit"
import drawer, { setDrawer, toggleDrawer } from "./drawer/drawer.slice"
import modal, { setModal, toggleModal } from "./modal/modal.slice"
import mode, { setMode, toggleMode } from "./mode/mode.slice"
import tasks, { addTask, getTasks, setCategory } from "./tasks/tasks.slice"

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

export {
	setDrawer,
	toggleDrawer,
	toggleModal,
	setModal,
	toggleMode,
	setMode,
	getTasks,
	addTask,
	setCategory
}
