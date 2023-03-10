import { PropsWithChildren, useState } from 'react'

import { CreatePostModel } from 'contexts'

import { IPostData } from 'interfaces'

export const CreatePostProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ post, setPost ] = useState<IPostData | null>(null)

  const VALUE = {
    post,
    setPost
  }

  return (
    <CreatePostModel.Provider value={ VALUE }>
      { children }
    </CreatePostModel.Provider>
  )
}
