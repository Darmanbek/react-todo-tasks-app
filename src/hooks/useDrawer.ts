import { useAppDispatch, useAppSelector } from "src/hooks/useAppStore"
import { setDrawer, toggleDrawer } from "src/store"

export const useDrawer = () => {
	const dispatch = useAppDispatch()
	const drawerState = useAppSelector((state) => state.drawer)

	return {
		...drawerState, // Возвращаем всё состояние
		toggleDrawer: (side: "left" | "right") => dispatch(toggleDrawer(side)),
		setDrawer: (side: "left" | "right", open: boolean) => dispatch(setDrawer({ side, open }))
	}
}
