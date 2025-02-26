import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface IModeState {
	isDarkMode: boolean
}

const initialState: IModeState = {
	isDarkMode: false
}

export const modeSlice = createSlice({
	name: "mode",
	initialState,
	reducers: {
		toggleMode: (state) => {
			state.isDarkMode = !state.isDarkMode
		},
		setMode: (state, { payload }: PayloadAction<boolean>) => {
			state.isDarkMode = payload
		}
	}
})

export const { toggleMode, setMode } = modeSlice.actions

export default modeSlice.reducer
