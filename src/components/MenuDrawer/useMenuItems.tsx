import type { MenuProps } from "antd"
import { BsClipboardCheckFill, BsUiRadiosGrid } from "react-icons/bs"
import { MdOutlineNotificationImportant } from "react-icons/md"
import { RiCalendarEventFill } from "react-icons/ri"
import { TbNotesOff } from "react-icons/tb"
import { useNavigate } from "react-router-dom"

type MenuItem = Required<MenuProps>["items"][number]

export const useMenuItems = () => {
	const navigate = useNavigate()

	const items: MenuItem[] = [
		{
			key: "/",
			icon: <BsUiRadiosGrid />,
			label: "Все задачи",
			onClick: () => {
				navigate("/")
			}
		},
		{
			key: "/today",
			icon: <RiCalendarEventFill />,
			label: "Сегодняшние задачи",
			onClick: () => {
				navigate("/today")
			}
		},
		{
			key: "/important",
			icon: <MdOutlineNotificationImportant />,
			label: "Важные задачи",
			onClick: () => {
				navigate("/important")
			}
		},
		{
			key: "/completed",
			icon: <BsClipboardCheckFill />,
			label: "Выполненные задачи",
			onClick: () => {
				navigate("/completed")
			}
		},
		{
			key: "/uncompleted",
			icon: <TbNotesOff />,
			label: "Незавершенные задачи",
			onClick: () => {
				navigate("/uncompleted")
			}
		}
	]

	return { items }
}
