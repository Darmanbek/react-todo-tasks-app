import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface ModalState {
	isOpen: boolean
}

const initialState: ModalState = {
	isOpen: false
}

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		toggleModal: (state) => {
			state.isOpen = !state.isOpen
		},
		setModal: (state, { payload }: PayloadAction<boolean>) => {
			state.isOpen = payload
		}
	}
})

export const { toggleModal, setModal } = modalSlice.actions

export default modalSlice.reducer
