import { gql } from 'graphql-request'

export const queryGetPosts = gql`
  query Posts {
    posts(orderBy: publishedAt_DESC) {
      title
      linkPost
      descriptionTitle
      mainImage {
        id
        url
      }
      createdAt
    }
  }
`
