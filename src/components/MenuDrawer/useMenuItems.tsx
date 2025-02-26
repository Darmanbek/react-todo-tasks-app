import {
	BellOutlined,
	CalendarOutlined,
	CarryOutOutlined,
	CloseSquareOutlined,
	ProductOutlined
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { useNavigate } from "react-router-dom"

type MenuItem = Required<MenuProps>["items"][number]

export const useMenuItems = () => {
	const navigate = useNavigate()

	const items: MenuItem[] = [
		{
			key: "/",
			icon: <ProductOutlined />,
			label: "Все задачи",
			onClick: () => {
				navigate("/")
			}
		},
		{
			key: "/today",
			icon: <CalendarOutlined />,
			label: "Сегодняшние задачи",
			onClick: () => {
				navigate("/today")
			}
		},
		{
			key: "/important",
			icon: <BellOutlined />,
			label: "Важные задачи",
			onClick: () => {
				navigate("/important")
			}
		},
		{
			key: "/completed",
			icon: <CarryOutOutlined />,
			label: "Выполненные задачи",
			onClick: () => {
				navigate("/completed")
			}
		},
		{
			key: "/uncompleted",
			icon: <CloseSquareOutlined />,
			label: "Незавершенные задачи",
			onClick: () => {
				navigate("/uncompleted")
			}
		}
	]

	return items
}
