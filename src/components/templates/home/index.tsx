import { usePosts } from 'contexts'

import { Card } from 'components/molecules'

export const TemplateHome: React.FC = () => {
  const { data } = usePosts()

  return (
    <main className="grid grid-cols-auto gap-2 px-3">
      { data?.map(post => <Card key={ post.slug } { ...post } />) }
    </main>
  )
}
