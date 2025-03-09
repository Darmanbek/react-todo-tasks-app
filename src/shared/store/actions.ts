import { drawerActions } from "./drawer/drawer.slice"
import { modalActions } from "./modal/modal.slice"
import { modeActions } from "./mode/mode.slice"
import { searchActions } from "./search/search.slice"
import { tasksActions } from "./tasks/tasks.slice"

export const { toggleDrawer, setDrawer } = drawerActions
export const { toggleModal, setModal } = modalActions
export const { toggleMode, setMode } = modeActions
export const { setSearch } = searchActions
export const { setTask } = tasksActions
