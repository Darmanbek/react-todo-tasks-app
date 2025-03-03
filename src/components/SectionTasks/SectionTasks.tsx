import { Card, Col, Result, Row, Skeleton, Typography } from "antd"
import dayjs from "dayjs"
import React from "react"
import { useParams } from "react-router-dom"
import type { ITask } from "src/model/task"
import { useGetTasksQuery } from "src/store/endpoints"
import { useAppSelector } from "src/store/hooks"
import { TaskItem } from "./TaskItem/TaskItem"

const categoryFilter = (task: ITask, category?: string) => {
	switch (category) {
		case "today":
			return task.date === dayjs().format("YYYY-MM-DD")
		case "important":
			return task.important
		case "completed":
			return task.completed
		case "uncompleted":
			return !task.completed
		default:
			return true
	}
}

const SectionTasks: React.FC = () => {
	const { search } = useAppSelector((state) => state.search)
	const { data: tasks = [], isLoading } = useGetTasksQuery({
		search
	})
	const { categoryId = "" } = useParams()

	const filteredTasks = tasks?.filter((task) => categoryFilter(task, categoryId))

	return (
		<section style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
			<div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
				<div
					style={{
						padding: "16px 0"
					}}
				>
					<Typography.Title level={2} style={{ fontSize: 20, fontWeight: 500 }}>
						Все задачи ({tasks?.length || 0} задача)
					</Typography.Title>
				</div>
				<Row gutter={20} style={{ rowGap: 20 }}>
					{isLoading
						? Array.from({ length: 4 }).map((_, index) => (
								<Col key={index} xs={24} md={12} xxl={8}>
									<Card
										loading={true}
										title={<Skeleton.Input active={true} size={"small"} />}
										actions={[
											<Skeleton.Button key={"1"} />,
											<Skeleton.Button key={"2"} />,
											<Skeleton.Button key={"3"} />,
											<Skeleton.Button key={"4"} />
										]}
									/>
								</Col>
							))
						: filteredTasks?.map?.((task, index) => (
								<Col key={index} xs={24} md={12} xxl={8}>
									<TaskItem task={task} />
								</Col>
							))}
				</Row>
				{!isLoading && filteredTasks?.length === 0 && (
					<Card
						bordered={false}
						style={{
							width: "100%",
							height: "100%",
							flexGrow: 1,
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						}}
					>
						<Result status={"404"} title={"У вас нет задач"} />
					</Card>
				)}
			</div>
		</section>
	)
}

export { SectionTasks }
