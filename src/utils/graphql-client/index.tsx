import { GraphQLClient } from 'graphql-request'

export const CLIENT = new GraphQLClient(process.env.NEXT_PUBLIC_CMS_URL as string)
