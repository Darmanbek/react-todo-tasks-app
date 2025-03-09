import { Card, Skeleton } from "antd"
import { type FC } from "react"

const TaskLoader: FC = () => {
	return (
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
	)
}

export { TaskLoader }
