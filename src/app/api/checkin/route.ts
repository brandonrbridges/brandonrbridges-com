// Next
import { NextResponse } from 'next/server'

// Hygraph
import { hygraph, hygraphMutation, query } from '@/lib/graphql'
import { GraphQLError } from 'graphql'

export async function POST(request: Request) {
	const body = await request.json()

	const { name, message } = body

	const MUTATION = query`
    mutation {
      createCheckInMessage (
        data: {
          name: "${name}",
          message: "${message}",
          date: "${new Date().toISOString()}"
        }
      ) {
        id
        name
        message
        date
      }
    }
  `

	// execute the mutation
	const response: {
		createCheckInMessage: {
			id: string
			name: string
			message: string
			date: string
		}
	} = await hygraph.request(MUTATION)

	const PUBLISH = query`
    mutation {
      publishCheckInMessage (where: { id: "${response.createCheckInMessage.id}" }) {
        id
        name
        message
        date
      }
    }
  `

	await hygraph.request(PUBLISH)

	// return a 200 response
	return NextResponse.json(response)
}
