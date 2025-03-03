import {
	CalendarOutlined,
	CheckOutlined,
	CloseOutlined,
	DeleteFilled,
	EditFilled,
	StarFilled
} from "@ant-design/icons"
import { Badge, Card, Flex, Popconfirm, Switch, Tag, theme, Typography } from "antd"
import type { FC } from "react"
import type { ITask } from "src/model/task"

interface TaskItemProps {
	task: ITask
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
	const { token } = theme.useToken()
	return (
		<Badge.Ribbon text={task.dir}>
			<Card
				title={task.title}
				style={{
					height: "100%",
					display: "flex",
					flexDirection: "column"
				}}
				styles={{
					actions: {
						paddingInlineStart: 12
					},
					body: {
						flexGrow: 1,
						display: "flex",
						flexDirection: "column"
					}
				}}
				actions={[
					<Switch
						key={"check"}
						defaultChecked={task.completed}
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
					/>,
					<StarFilled
						style={{ fontSize: 20, color: task.important ? token.red : "inherit" }}
						key={"favorite"}
					/>,
					<Popconfirm
						title={`Удалить ${task.title?.toLowerCase()}?`}
						okText={"Удалить"}
						okButtonProps={{
							danger: true
						}}
					>
						<DeleteFilled style={{ fontSize: 20 }} key={"delete"} />
					</Popconfirm>,
					<EditFilled style={{ fontSize: 20 }} key={"edit"} />
				]}
			>
				<Typography.Paragraph style={{ flexGrow: 1 }}>{task.description}</Typography.Paragraph>
				<Flex style={{ marginTop: 20 }}>
					<Tag
						icon={<CalendarOutlined />}
						color={task.completed ? "green-inverse" : "gold-inverse"}
						style={{ fontSize: 14, paddingBlock: 4 }}
					>
						{task.date}
					</Tag>
				</Flex>
			</Card>
		</Badge.Ribbon>
	)
}

export { TaskItem }
