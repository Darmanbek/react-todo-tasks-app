import { SearchOutlined } from "@ant-design/icons"
import { Input, type InputProps } from "antd"
import React, { useEffect, useState } from "react"
import { useDebounce } from "src/shared/hooks/use-debounce"
import { setSearch } from "src/shared/store/actions"
import { useAppDispatch } from "src/shared/store/hooks"

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

export { SearchInput }
