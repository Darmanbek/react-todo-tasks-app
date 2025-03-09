import { Col, Row, Typography } from "antd"
import type { FC } from "react"
import { useParams } from "react-router-dom"
import { useGetTasksQuery } from "src/shared/store/endpoints"
import { useAppSelector } from "src/shared/store/hooks"
import { Task, TaskEmpty, TaskLoader } from "./ui"
import { categoryFilter } from "./utils"

const Tasks: FC = () => {
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
									<TaskLoader />
								</Col>
							))
						: filteredTasks?.map?.((task, index) => (
								<Col key={index} xs={24} md={12} xxl={8}>
									<Task task={task} />
								</Col>
							))}
				</Row>
				{!isLoading && filteredTasks?.length === 0 && <TaskEmpty />}
			</div>
		</section>
	)
}

export { Tasks }
