import { createSlice, createAsyncThunk, ActionReducerMapBuilder, PayloadAction  } from "@reduxjs/toolkit";
import { api } from "../../api";
import { ITaskState } from "../../model/task";

export const getTasks = createAsyncThunk<ITaskState[], void>("tasks/getTasks", async (_, { rejectWithValue }) => {
    try {
        const responce = await api.get("/tasks")
        console.log(responce);
        
        if (responce.status === 200) {
            console.log(responce.data);
            return responce.data;
        }
    } catch (error: any) {
        return rejectWithValue(error.message)
    }
})

export interface ITasksState {
    tasks: ITaskState[];
    loading: string;
    error: any;
}

const initialState: ITasksState = {
    tasks: [],
    loading: "",
    error: null
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {  },
    extraReducers: (builders: ActionReducerMapBuilder<ITasksState>) => {
        builders.addCase(getTasks.pending, (state: ITasksState) => {
            state.loading = "pending";
            state.error = null;
        }),
        builders.addCase(getTasks.fulfilled, (state: ITasksState, { payload }: PayloadAction<ITaskState[]>) => {
            state.tasks = payload;
            state.loading = "fulfilled";
            state.error = null;
        }),
        builders.addCase(getTasks.rejected, (state: ITasksState, { payload }: PayloadAction<any>) => {
            state.loading = "rejected";
            state.error = payload;
        })
    }
})

export const { } = tasksSlice.actions;

export default tasksSlice.reducer;