import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'

// The Blog Page Content
export default function Blog({ posts }) {
  return (<main>
    { posts.map(post => {
      //extract slug and frontmatter
      const { slug, frontmatter } = post
      //extract frontmatter properties
      const {
        title, author, category, date, bannerImage, tags
      } = frontmatter

      //JSX for individual blog listing
      return (<article key={ title }>
        <Link href={ `/posts/${slug}` }>
          <h1>{ title }</h1>
        </Link>
        <h3>{ author }</h3>
        <h3>{ date }</h3>
      </article>)
    }) }
  </main>)
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const FOLDER_POSTS = path.join(__dirname, '../../../src/posts')
  const files = fs.readdirSync(FOLDER_POSTS)

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')

    console.log({ slug })

    const readFile = fs.readFileSync(`${FOLDER_POSTS}/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)

    return {
      slug,
      frontmatter
    }
  })

  // Return the pages static props
  return { props: { posts } }
}
