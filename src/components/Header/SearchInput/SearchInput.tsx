import { SearchOutlined } from "@ant-design/icons"
import { Input, type InputProps } from "antd"
import React, { useEffect, useState } from "react"
import { useDebounce } from "src/hooks/useDebounce"
import { useAppDispatch } from "src/store/hooks"
import { setSearch } from "src/store/search/search.slice"

interface SearchInputProps extends InputProps {
	className?: string
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
	const [value, setValue] = useState("")

	const dispatch = useAppDispatch()
	const debounceValue = useDebounce(value)

	useEffect(() => {
		dispatch(setSearch(debounceValue))
	}, [debounceValue, dispatch])
	return (
		<Input
			size={"large"}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			suffix={<SearchOutlined />}
			placeholder={"Искать задачу"}
			{...props}
		/>
	)
}

export default SearchInput
