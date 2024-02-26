import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./mode/modeSlice";
import drawerReducer from "./drawer/drawerSlice";
import tasksReducer from "./tasks/tasksSlice";
import modalReducer from "./modal/modalSlice";

export const store = configureStore({
    reducer: {
        mode: modeReducer, 
        drawer: drawerReducer,
        tasks: tasksReducer,
        modal: modalReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
