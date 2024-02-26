import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IModalState {
    open: boolean;
}

const initialState: IModalState = {
    open: false 
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        handleModal: (state) => {
            state.open = !state.open;
        },
        setModal: (state, { payload }: PayloadAction<boolean>) => {
            state.open = payload;
        }
    }
});

export const { handleModal, setModal } = modalSlice.actions;

export default modalSlice.reducer;