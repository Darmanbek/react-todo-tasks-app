import { Input } from "antd"
import React from "react"
import { BsSearch } from "react-icons/bs"

interface SearchInputProps {
	className?: string
}

const SearchInput: React.FC<SearchInputProps> = ({ className = "" }) => {
	return (
		<Input
			size={"large"}
			className={className}
			suffix={<BsSearch />}
			placeholder={"Искать задачу"}
		/>
	)
}

export default SearchInput
