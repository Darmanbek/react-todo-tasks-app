import dayjs from "dayjs"
import type { Task } from "src/shared/model/task"

export const categoryFilter = (task: Task, category?: string) => {
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
