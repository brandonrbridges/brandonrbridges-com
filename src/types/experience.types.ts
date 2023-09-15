import { Project } from './project.types'

export type Experience = {
	id: string
	title: string
	jobTitle: string
	startDate: string
	endDate: string
	description: string
	project?: Project
}
