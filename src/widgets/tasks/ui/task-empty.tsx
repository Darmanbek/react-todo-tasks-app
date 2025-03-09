import { Card, Result } from "antd"
import { type FC } from "react"

const TaskEmpty: FC = () => {
	return (
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
	)
}

export { TaskEmpty }
