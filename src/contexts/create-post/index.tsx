import { createContext, useContext } from 'react'

import { ICreatePostModel } from 'interfaces'

export const CreatePostModel = createContext({} as ICreatePostModel)

export const useCreatePost = (): ICreatePostModel => useContext(CreatePostModel)
