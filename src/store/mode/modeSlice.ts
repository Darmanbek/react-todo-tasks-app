import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IModeState {
    mode: boolean
}

const initialState: IModeState = {
    mode: false 
}

export const modeSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        handleMode: (state) => {
            state.mode = !state.mode;
        },
        setMode: (state, { payload }: PayloadAction<boolean>) => {
            state.mode = payload;
        }
    }
});

export const { handleMode, setMode } = modeSlice.actions;

export default modeSlice.reducer;