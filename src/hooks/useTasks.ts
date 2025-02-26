import { useAppDispatch, useAppSelector } from "src/hooks/useAppStore"
import type { ITaskState } from "src/model/task"
import { addTask, getTasks, type RootState } from "src/store"

export const useTasks = () => {
	const dispatch = useAppDispatch()
	const { tasks, loading, error } = useAppSelector((state: RootState) => state.tasks)

	return {
		tasks,
		loading,
		error,
		getTasks: (filters: Record<string, unknown>) => dispatch(getTasks(filters)),
		addTask: (task: ITaskState) => dispatch(addTask(task))
	}
}
