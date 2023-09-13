export type Project = {
	title: string
	slug: string
	description: string
	tags: string[]
	mainImage?: {
		url: string
	}
	thumbnailImage?: {
		url: string
	}
}
