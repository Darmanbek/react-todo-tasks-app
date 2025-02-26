import { useAppDispatch, useAppSelector } from "src/hooks/useAppStore"
import { setMode, toggleMode } from "src/store"

export const useMode = () => {
	const dispatch = useAppDispatch()
	const isDarkMode = useAppSelector((state) => state.mode.isDarkMode)

	return {
		isDarkMode,
		toggleMode: () => dispatch(toggleMode()),
		setMode: (mode: boolean) => dispatch(setMode(mode))
	}
}
