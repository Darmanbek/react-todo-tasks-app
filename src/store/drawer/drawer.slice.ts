import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface IDrawerState {
	left: boolean
	right: boolean
}

const initialState: IDrawerState = {
	left: true,
	right: true
}

export const drawerSlice = createSlice({
	name: "drawer",
	initialState,
	reducers: {
		toggleDrawer: (state, { payload }: PayloadAction<"left" | "right">) => {
			state[payload] = !state[payload]
		},
		setDrawer: (state, { payload }: PayloadAction<{ side: "left" | "right"; open: boolean }>) => {
			state[payload.side] = payload.open
		}
	}
})

export const { toggleDrawer, setDrawer } = drawerSlice.actions

export default drawerSlice.reducer
