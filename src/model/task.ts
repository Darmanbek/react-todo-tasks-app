import type { Dayjs } from "dayjs"

export interface ITask {
	id: string
	title: string
	date: string
	description: string
	dir: string
	important: boolean
	completed: boolean
}

export interface ITaskChange {
	id?: string
	title?: string
	date?: string | Dayjs
	description?: string
	dir?: string
	important?: boolean
	completed?: boolean
}
