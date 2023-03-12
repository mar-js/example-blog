import { NextPage } from 'next'

import { CreatePostProvider } from 'providers'

import { TemplateCreatePost } from 'components/templates'

const CreatePost: NextPage = () => (
  <CreatePostProvider>
    <TemplateCreatePost />
  </CreatePostProvider>
)

export default CreatePost
