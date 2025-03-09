import { MenuOutlined } from "@ant-design/icons"
import { Button } from "antd"
import React from "react"
import { toggleDrawer } from "src/shared/store/actions"
import { useAppDispatch } from "src/shared/store/hooks"

const MenuButton: React.FC = () => {
	const dispatch = useAppDispatch()

	const handleMenu = () => {
		dispatch(toggleDrawer("left"))
	}

	return (
		<Button
			onClick={handleMenu}
			size={"large"}
			type={"text"}
			className={"cursor-pointer relative size-10 hidden max-xl:block"}
			icon={<MenuOutlined />}
		/>
	)
}

export { MenuButton }
