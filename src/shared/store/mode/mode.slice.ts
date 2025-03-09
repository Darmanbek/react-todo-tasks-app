import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface ModeState {
	isDarkMode: boolean
}

const initialState: ModeState = {
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

export const { reducer: mode, actions: modeActions } = modeSlice
