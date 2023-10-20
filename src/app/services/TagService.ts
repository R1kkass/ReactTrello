import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export interface TagData {
    id: number;
    name: string;
    color: string
}

export const tagApi = createApi({
    reducerPath: "tagAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/api/",
    }),
    tagTypes: ["Tag"],
    endpoints: (build) => ({
        getStatus: build.query<TagData[], void>({
            query: () => ({
                url: `/tag`,
            }),
            providesTags: ["Tag"],
            transformResponse: (response: { data: TagData[] }) =>
                response.data,
        }),
    }),
});