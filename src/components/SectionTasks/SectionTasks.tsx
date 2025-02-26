import { Col, Row, Typography } from "antd"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "src/hooks"
import { getTasks } from "src/store/tasks/tasks.slice"
import TaskItem from "./TaskItem/TaskItem"

const SectionTasks: React.FC = () => {
	const { tasks } = useAppSelector((state) => state.tasks)
	const dispatch = useAppDispatch()
	const { categoryID } = useParams()

	useEffect(() => {
		const category = categoryID || ""
		dispatch(getTasks(category))
	}, [dispatch, categoryID])
	return (
		<section>
			<div>
				<div
					style={{
						padding: "16px 0"
					}}
				>
					<Typography.Title level={2} style={{ fontSize: 20, fontWeight: 500 }}>
						Все задачи ({tasks.length} задача)
					</Typography.Title>
				</div>
				<Row gutter={20} style={{ rowGap: 20, marginBottom: 20 }}>
					{tasks?.map?.((task, index) => (
						<Col key={index} xs={24} md={12} xxl={8}>
							<TaskItem
								id={task.id}
								completed={task.completed}
								date={task.date}
								description={task.description}
								dir={task.dir}
								important={task.important}
								title={task.title}
							/>
						</Col>
					))}
				</Row>
			</div>
		</section>
	)
}

export default SectionTasks
