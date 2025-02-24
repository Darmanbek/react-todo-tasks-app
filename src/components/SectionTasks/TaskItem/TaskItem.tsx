import { Badge, Card, Flex, Space, Typography } from "antd"
import type { FC } from "react"
import { BiSolidTrashAlt } from "react-icons/bi"
import { GoStarFill } from "react-icons/go"
import { IoMdCalendar } from "react-icons/io"
import { MdEdit } from "react-icons/md"
import type { ITaskState } from "src/model/task"

const TaskItem: FC<ITaskState> = ({ title, description, date, dir, completed }) => {
	return (
		<Badge.Ribbon text={dir}>
			<Card
				title={title}
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 20
				}}
				actions={[
					<button key={"check"}>
						<span className={""}>{completed ? "Выполненный" : "Невыполненный"}</span>
					</button>,
					<GoStarFill key={"favorite"} />,
					<BiSolidTrashAlt key={"delete"} />,
					<MdEdit key={"edit"} />
				]}
			>
				<Typography.Paragraph>{description}</Typography.Paragraph>
				<Flex>
					<Space>
						<IoMdCalendar />
						<span>{date}</span>
					</Space>
				</Flex>
			</Card>
		</Badge.Ribbon>
	)
}

export default TaskItem
