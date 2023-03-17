import { gql } from 'graphql-request'

export const queryGetPost = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      createdAt
      title
      descriptionTitle
      mainImage {
        url
        id
      }
      description
    }
  }
`
