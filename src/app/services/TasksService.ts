import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { TaskData } from "./interface";

interface SetStatusActionArg {
    id: number;
    status: boolean;
    descriptions: string;
}

interface AddActionArg {
    descriptions: string;
    task_id: number;
}

interface AddTasksArg {
    id: number;
    status_id: number;
    title: string;
    description: string;
}

interface AddTagTask{
    task_id: number;
    tag_id: number;
}

interface BodyData {
    title: string;
    description?: string;
    status_id: number;
}

export const taskApi = createApi({
    reducerPath: "taskAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/api/",
    }),
    tagTypes: ["Tasks"],
    endpoints: (build) => ({
        getTasks: build.query<TaskData[], void>({
            query: () => ({
                url: `/tasks`,
            }),
            providesTags: ["Tasks"],
            transformResponse: (response: { data: TaskData[] }) =>
                response.data,
        }),
        addTasks: build.mutation<TaskData[], BodyData>({
            query: (body) => ({
                url: `/tasks`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["Tasks"],
            transformResponse: (response: { data: TaskData[] }) =>
                response.data,
        }),
        setStatusAction: build.mutation<TaskData[], SetStatusActionArg>({
            query: (arg) => ({
                url: `/action/${arg.id}`,
                body: {
                    status: arg.status,
                    descriptions: arg.descriptions,
                },
                method: "PUT",
            }),
            invalidatesTags: ["Tasks"],
            transformResponse: (response: { data: TaskData[] }) =>
                response.data,
        }),
        addAction: build.mutation<TaskData[], AddActionArg>({
            query: (arg) => ({
                url: `/action/`,
                body: {
                    descriptions: arg.descriptions,
                    task_id: arg.task_id,
                },
                method: "POST",
            }),
            invalidatesTags: ["Tasks"],
            transformResponse: (response: { data: TaskData[] }) =>
                response.data,
        }),
        deleteAction: build.mutation<TaskData[], number>({
            query: (id) => ({
                url: `/action/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Tasks"],
            transformResponse: (response: { data: TaskData[] }) =>
                response.data,
        }),
        setStatus: build.mutation<TaskData[], AddTasksArg>({
            query: ({ id, status_id, title, description }) => ({
                url: `/tasks/${id}`,
                method: "PUT",
                body: {
                    status_id,
                    title,
                    description,
                },
            }),
            invalidatesTags: ["Tasks"],
            transformResponse: (response: { data: TaskData[] }) =>
                response.data,
        }),
        deleteTask: build.mutation<TaskData[], number>({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Tasks"],
            transformResponse: (response: { data: TaskData[] }) =>
                response.data,
        }),
        addTags: build.mutation<TaskData[], AddTagTask>({
            query: (body) => ({
                url: `/tagtask`,
                method: "POST",
                body
            }),
            invalidatesTags: ["Tasks"],
            transformResponse: (response: { data: TaskData[] }) =>
                response.data,
        }),
        deleteTag: build.mutation<TaskData[], number>({
            query: (id) => ({
                url: `/tagtask/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Tasks"],
            transformResponse: (response: { data: TaskData[] }) =>
                response.data,
        }),
    }),
});
