import { createContext, useContext } from 'react'

import { IPostContextModel } from 'interfaces'

export const PostContextModel = createContext({} as IPostContextModel)
export const usePost = (): IPostContextModel => useContext(PostContextModel)
