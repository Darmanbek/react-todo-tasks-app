import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface ISearchState {
	search: string
}

const initialState: ISearchState = {
	search: ""
}

export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload
		}
	}
})

export const { setSearch } = searchSlice.actions
export default searchSlice.reducer
