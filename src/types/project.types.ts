export type Project = {
	title: string
	slug: string
	description: string
	url: string
	tags: string[]
	mainImage?: {
		url: string
	}
	thumbnailImage?: {
		url: string
	}
	content: string
}
