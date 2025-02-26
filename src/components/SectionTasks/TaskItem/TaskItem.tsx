import { CalendarOutlined, DeleteFilled, EditFilled, StarFilled } from "@ant-design/icons"
import { Badge, Card, Flex, Tag, Typography } from "antd"
import type { FC } from "react"
import type { ITaskState } from "src/model/task"

const TaskItem: FC<ITaskState> = ({ title, description, date, dir, completed }) => {
	return (
		<Badge.Ribbon text={dir}>
			<Card
				title={title}
				styles={{
					actions: {
						paddingInlineStart: 12
					}
				}}
				actions={[
					<Tag key={"check"} color={completed ? "green-inverse" : "orange-inverse"}>
						{completed ? "Выполненный" : "Невыполненный"}
					</Tag>,
					<StarFilled style={{ fontSize: 20 }} key={"favorite"} />,
					<DeleteFilled style={{ fontSize: 20 }} key={"delete"} />,
					<EditFilled style={{ fontSize: 20 }} key={"edit"} />
				]}
			>
				<Typography.Paragraph>{description}</Typography.Paragraph>
				<Flex style={{ marginTop: 20 }}>
					<Tag icon={<CalendarOutlined />} style={{ fontSize: 14, paddingBlock: 4 }}>
						{date}
					</Tag>
				</Flex>
			</Card>
		</Badge.Ribbon>
	)
}

export default TaskItem
