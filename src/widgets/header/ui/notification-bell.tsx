import { BellFilled } from "@ant-design/icons"
import { Badge, Flex, Popover, theme } from "antd"
import { type FC } from "react"
import { useGetTasksQuery } from "src/shared/store/endpoints"

const NotificationBell: FC = () => {
	const { data: tasks = [] } = useGetTasksQuery({})

	const { token } = theme.useToken()
	return (
		<Popover
			content={
				<Flex vertical={true} gap={8}>
					<div>Незавершенные задачи</div>
					<ol style={{ paddingInlineStart: 12 }}>
						{tasks
							?.filter((task) => !task.completed)
							.map((task, index) => <li key={index}>{task?.title}</li>)}
					</ol>
				</Flex>
			}
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

export { NotificationBell }
