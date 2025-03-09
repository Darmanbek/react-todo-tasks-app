import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseURL } from "src/shared/config/url.config"

export const api = createApi({
	reducerPath: "tasks/api",
	baseQuery: fetchBaseQuery({
		baseUrl: baseURL
	}),
	tagTypes: ["tasks"],
	endpoints: (build) => ({
		default: build.query({
			query: () => "default"
		})
	})
})
