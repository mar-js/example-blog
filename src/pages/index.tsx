import { GetServerSideProps, NextPage } from 'next'

import { PostsContextModel } from 'contexts'

import { CLIENT } from 'utils'

import { queryGetPosts } from 'apis'

import { TemplateHome } from 'components/templates'

import { IPosts, IPostsContextModel } from 'interfaces'

const Home: NextPage<IPostsContextModel> = (value) => (
  <PostsContextModel.Provider value={ value }>
    <TemplateHome />
  </PostsContextModel.Provider>
)

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { posts }: IPosts = await CLIENT.request(queryGetPosts)

    return {
      props: {
        loading: 'ok',
        data: posts
      }
    }
  } catch (error) {
    console.error('ERROR SSR HOME', error)

    return {
      props: {
        loading: 'fail',
        error
      }
    }
  }
}

export default Home
