import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export interface StatusData {
    id: number;
    name: string;
}


export const statusApi = createApi({
    reducerPath: "statusAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/api/",
    }),
    tagTypes: ["Status"],
    endpoints: (build) => ({
        getStatus: build.query<StatusData[], void>({
            query: () => ({
                url: `/status`,
            }),
            providesTags: ["Status"],
            transformResponse: (response: { data: StatusData[] }) =>
                response.data,
        }),
    }),
});
