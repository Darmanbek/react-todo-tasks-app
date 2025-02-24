import type { FC } from "react"

const TaskList: FC = () => {
	return (
		<div>
			<div>Незавершенные задачи</div>
			<ul>
				<li>1. иследование</li>
				<li>2. Важное</li>
			</ul>
		</div>
	)
}

export { TaskList }
