// import { useEffect, useState } from "react"
// import { useAppDispatch, useAppSelector } from "src/hooks/useAppStore"
// import type { SearchParams } from "src/model/response"
// import type { ITask } from "src/model/task"
// import { addTask, getTasks } from "./tasks.thunks"
//
// export const useGetTasks = (params: SearchParams = {}) => {
// 	const dispatch = useAppDispatch()
// 	const { tasks, loading, error } = useAppSelector((state) => state.tasks)
//
// 	useEffect(() => {
// 		dispatch(getTasks(params))
// 	}, [dispatch, params])
// 	return {
// 		tasks,
// 		loading,
// 		error
// 	}
// }
//
// export const useAddTask = () => {
// 	const [loading, setLoading] = useState(false)
// 	const dispatch = useAppDispatch()
//
// 	const mutate = (data: ITask) => {
// 		setLoading(true)
// 		dispatch(addTask(data))
// 		setLoading(false)
// 	}
//
// 	return {
// 		mutate,
// 		loading
// 	}
// }
