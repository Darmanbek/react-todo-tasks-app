import { MenuOutlined } from "@ant-design/icons"
import { Button } from "antd"
import React from "react"
import { useAppDispatch } from "src/hooks"
import { handleLeftDrawer } from "src/store/drawer/drawer.slice"

const MenuButton: React.FC = () => {
	// const { drawerLeftOpen } = useAppSelector((state: RootState) => state.drawer)
	const dispatch = useAppDispatch()

	const handleMenu = () => {
		dispatch(handleLeftDrawer())
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

export default MenuButton
