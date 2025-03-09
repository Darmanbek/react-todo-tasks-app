import type { Dayjs } from "dayjs"

export interface Task {
	id: string
	title: string
	date: string
	description: string
	dir: string
	important: boolean
	completed: boolean
}

export interface TaskChange {
	id?: string
	title?: string
	date?: string | Dayjs
	description?: string
	dir?: string
	important?: boolean
	completed?: boolean
}
