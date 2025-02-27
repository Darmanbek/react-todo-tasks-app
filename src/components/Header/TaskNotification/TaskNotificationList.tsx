import { Flex } from "antd"
import type { FC } from "react"
import type { ITask } from "src/model/task"

interface TaskNotificationListProps {
	tasks: ITask[]
}

const TaskNotificationList: FC<TaskNotificationListProps> = ({ tasks }) => {
	return (
		<Flex vertical={true} gap={8}>
			<div>Незавершенные задачи</div>
			<ol style={{ paddingInlineStart: 12 }}>
				{tasks
					?.filter((task) => !task.completed)
					.map((task, index) => <li key={index}>{task?.title}</li>)}
			</ol>
		</Flex>
	)
}

export { TaskNotificationList }
