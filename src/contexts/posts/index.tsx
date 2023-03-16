import { createContext, useContext } from 'react'

import { IPostsContextModel } from 'interfaces'

export const PostsContextModel = createContext({} as IPostsContextModel)
export const usePosts = (): IPostsContextModel => useContext(PostsContextModel)
