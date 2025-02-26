import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface IDrawerState {
	drawerLeftOpen: boolean
	drawerRightOpen: boolean
}

const initialState: IDrawerState = {
	drawerLeftOpen: true,
	drawerRightOpen: true
}

export const drawerSlice = createSlice({
	name: "drawer",
	initialState,
	reducers: {
		handleLeftDrawer: (state) => {
			state.drawerLeftOpen = !state.drawerLeftOpen
		},
		handleRightDrawer: (state) => {
			state.drawerRightOpen = !state.drawerRightOpen
		},

		setLeftDrawer: (state, { payload }: PayloadAction<boolean>) => {
			state.drawerLeftOpen = payload
		},
		setRightDrawer: (state, { payload }: PayloadAction<boolean>) => {
			state.drawerRightOpen = payload
		}
	}
})

export const { handleLeftDrawer, handleRightDrawer, setLeftDrawer, setRightDrawer } =
	drawerSlice.actions

export default drawerSlice.reducer
