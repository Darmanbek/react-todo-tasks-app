import { SearchOutlined } from "@ant-design/icons"
import { Input, type InputProps } from "antd"
import React from "react"

interface SearchInputProps extends InputProps {
	className?: string
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
	return (
		<Input size={"large"} suffix={<SearchOutlined />} placeholder={"Искать задачу"} {...props} />
	)
}

export default SearchInput
