import { gql } from 'graphql-request'

export const queryGetPosts = gql`
  query Posts {
    posts(orderBy: publishedAt_DESC) {
      title
      slug
      descriptionTitle
      mainImage {
        id
        url
      }
      createdAt
    }
  }
`
