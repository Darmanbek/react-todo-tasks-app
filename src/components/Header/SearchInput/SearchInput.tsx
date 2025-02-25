import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import React from "react"

interface SearchInputProps {
	className?: string
}

const SearchInput: React.FC<SearchInputProps> = ({ className = "" }) => {
	return (
		<Input
			size={"large"}
			className={className}
			suffix={<SearchOutlined />}
			placeholder={"Искать задачу"}
		/>
	)
}

export default SearchInput
