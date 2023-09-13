// GraphQL
import { GraphQLClient, gql } from 'graphql-request'

const {
	NEXT_PUBLIC_HYGRAPH_URL,
	NEXT_PUBLIC_HYGRAPH_MUTATION_URL,
	NEXT_PUBLIC_HYGRAPH_TOKEN,
} = process.env as Record<string, string>

export const hygraph = new GraphQLClient(NEXT_PUBLIC_HYGRAPH_URL, {
	headers: {
		authorization: `Bearer ${NEXT_PUBLIC_HYGRAPH_TOKEN}`,
	},
})

export const hygraphMutation = new GraphQLClient(
	NEXT_PUBLIC_HYGRAPH_MUTATION_URL,
	{
		headers: {
			authorization: `Bearer ${NEXT_PUBLIC_HYGRAPH_TOKEN}`,
		},
	}
)

export const query = gql
