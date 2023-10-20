import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { taskApi } from "../services/TasksService";
import { statusApi } from "../services/StatusService";
import { tagApi } from "../services/TagService";

const rootReducer = combineReducers({
    [taskApi.reducerPath]: taskApi.reducer,
    [statusApi.reducerPath]: statusApi.reducer,
    [tagApi.reducerPath]: tagApi.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(taskApi.middleware)
                .concat(statusApi.middleware)
                .concat(tagApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
