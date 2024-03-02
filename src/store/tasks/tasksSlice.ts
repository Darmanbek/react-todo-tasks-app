import { createSlice, createAsyncThunk, ActionReducerMapBuilder, PayloadAction  } from "@reduxjs/toolkit";
import { api } from "../../api";
import { ITaskState } from "../../model/task";


const getFilterResponce = (category: string) => {
    switch (category) {
        case "important": return "?important=true";
        case "completed": return "?completed=true";
        case "uncompleted": return "?completed=false";
        default: return "/";
    }
}

const getToday = () => {
    const date = new Date();
    let dd: string | number = date.getDate();
    let mm: string | number = date.getMonth() + 1;
    let yyyy: number = date.getFullYear();
    dd = dd < 10 ? "0" + dd : dd;
    mm = mm < 10 ? "0" + mm : mm;

    const today: string = yyyy + '-' + mm + '-' +  dd;

    return today;
}

export const getTasks = createAsyncThunk<ITaskState[], string>("tasks/getTasks", async (category: string, { rejectWithValue, dispatch }) => {
    dispatch(setCategory("/" + category));
    const filters = getFilterResponce(category);
    try {
        const responce = await api.get(`/tasks${filters}`)

        if (responce.status === 200) {
            if (category === "today") {
                const today = getToday();
                const responceToday = responce.data.filter((el: ITaskState) => el.date === today);
                return responceToday;
            }
            return responce.data;
        }
    } catch (error: any) {
        return rejectWithValue(error.message)
    }
})

export const addTask = createAsyncThunk("tasks/addTask", async (newTaks: ITaskState, { rejectWithValue, dispatch }) => {
    try {
        const responce = await api.post("/tasks", newTaks);

        if (responce.status === 201) {
            dispatch(addNewTask(responce.data))
        }
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
})

export interface ITasksState {
    tasks: ITaskState[];
    category: string;
    loading: string;
    error: any;
}

const initialState: ITasksState = {
    tasks: [],
    category: "/",
    loading: "",
    error: null
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: { 
        addNewTask: (state, { payload }: PayloadAction<ITaskState>) => {
            state.tasks = [...state.tasks, payload];
        },
        setCategory: (state, { payload }: PayloadAction<string>) => {
            state.category = payload;
        },
    },
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

export const { setCategory, addNewTask } = tasksSlice.actions;

export default tasksSlice.reducer;