import { Card, Col, Result, Row, Skeleton, Typography } from "antd"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "src/hooks"
import { getTasks } from "src/store/tasks/tasks.slice"
import TaskItem from "./TaskItem/TaskItem"

const SectionTasks: React.FC = () => {
	const { tasks, loading } = useAppSelector((state) => state.tasks)
	const dispatch = useAppDispatch()
	const { categoryID } = useParams()

	useEffect(() => {
		const category = categoryID || ""
		dispatch(getTasks(category))
	}, [dispatch, categoryID])
	return (
		<section style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
			<div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
				<div
					style={{
						padding: "16px 0"
					}}
				>
					<Typography.Title level={2} style={{ fontSize: 20, fontWeight: 500 }}>
						Все задачи ({tasks.length} задача)
					</Typography.Title>
				</div>
				<Row gutter={20} style={{ rowGap: 20 }}>
					{loading
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
						: tasks?.map?.((task, index) => (
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
				{tasks.length === 0 && (
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

export default SectionTasks
