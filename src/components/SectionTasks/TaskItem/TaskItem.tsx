import {
	CalendarOutlined,
	CheckOutlined,
	CloseOutlined,
	DeleteFilled,
	EditFilled,
	StarFilled
} from "@ant-design/icons"
import { Badge, Card, Flex, Switch, Tag, Typography } from "antd"
import type { FC } from "react"
import type { ITask } from "src/model/task"

interface TaskItemProps {
	task: ITask
}

const TaskItem: FC<TaskItemProps> = ({ task: { title, description, date, dir, completed } }) => {
	return (
		<Badge.Ribbon text={dir}>
			<Card
				title={title}
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
						defaultChecked={completed}
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
					/>,
					<StarFilled style={{ fontSize: 20 }} key={"favorite"} />,
					<DeleteFilled style={{ fontSize: 20 }} key={"delete"} />,
					<EditFilled style={{ fontSize: 20 }} key={"edit"} />
				]}
			>
				<Typography.Paragraph style={{ flexGrow: 1 }}>{description}</Typography.Paragraph>
				<Flex style={{ marginTop: 20 }}>
					<Tag
						icon={<CalendarOutlined />}
						color={completed ? "green-inverse" : "gold-inverse"}
						style={{ fontSize: 14, paddingBlock: 4 }}
					>
						{date}
					</Tag>
				</Flex>
			</Card>
		</Badge.Ribbon>
	)
}

export { TaskItem }
