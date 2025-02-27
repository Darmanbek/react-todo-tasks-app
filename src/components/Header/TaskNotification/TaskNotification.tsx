import { BellFilled } from "@ant-design/icons"
import { Badge, Popover, theme } from "antd"
import { type FC } from "react"
import { useAppSelector } from "src/store/hooks"
import { TaskNotificationList } from "./TaskNotificationList"

const TaskNotification: FC = () => {
	const { tasks } = useAppSelector((state) => state.tasks)

	const { token } = theme.useToken()
	return (
		<Popover
			content={<TaskNotificationList tasks={tasks} />}
			trigger={"click"}
			placement={"bottomRight"}
		>
			<Badge count={tasks?.filter((e) => !e.completed)?.length || 0} size={"small"}>
				<BellFilled
					style={{ fontSize: 24, cursor: "pointer", color: token.colorPrimary }}
					className={"text-light-violet"}
				/>
			</Badge>
		</Popover>
	)
}

export { TaskNotification }
