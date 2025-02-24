import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface IDrawerState {
	drawerLeftOpen: boolean
	drawerRightOpen: boolean
	drawerMask: boolean
}

const initialState: IDrawerState = {
	drawerLeftOpen: true,
	drawerRightOpen: true,
	drawerMask: false
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
		handleDrawerMask: (state) => {
			state.drawerMask = !state.drawerMask
		},
		setLeftDrawer: (state, { payload }: PayloadAction<boolean>) => {
			state.drawerLeftOpen = payload
		},
		setRightDrawer: (state, { payload }: PayloadAction<boolean>) => {
			state.drawerRightOpen = payload
		},
		setDrawerMask: (state, { payload }: PayloadAction<boolean>) => {
			state.drawerMask = payload
		}
	}
})

export const {
	handleLeftDrawer,
	handleRightDrawer,
	handleDrawerMask,
	setLeftDrawer,
	setRightDrawer,
	setDrawerMask
} = drawerSlice.actions

export default drawerSlice.reducer
