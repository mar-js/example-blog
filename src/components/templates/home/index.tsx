import { Card } from 'components/molecules'
import { Header } from 'components/organisms'
import { usePosts } from 'contexts'

export const TemplateHome: React.FC = () => {
  const { data } = usePosts()

  return (
    <>
      <Header />
      <main className="grid grid-cols-auto gap-2 px-3">
        { data?.map(post => <Card key={ post.linkPost } { ...post } />) }
      </main>
    </>
  )
}
